from datetime import datetime, timedelta
from werkzeug.security import check_password_hash, generate_password_hash
from flask_login import UserMixin
import jwt
from app import db, login, Config

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    notes = db.relationship('Note', backref='author', lazy='dynamic')

    def __repr__(self):
        return '<User {}>'.format(self.username)
    
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)
    
    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
    
    def encode_auth_token(self):
        try:
            payload = {
                'exp': datetime.utcnow() + timedelta(days=1, seconds=0),
                'iat': datetime.utcnow(),
                'sub': self.id
            }
            return jwt.encode(
                payload,
                Config.JWT_SECRET,
                algorithm ='HS256'
            )
        except Exception as e:
            return e


class Note(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(140))
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return '<Note {}>'.format(self.body)

@login.user_loader
def load_user(id):
    return User.query.get(int(id))