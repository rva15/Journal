import time
import json
from flask import make_response
from app import app, db
from app.models import User, Note

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/')
@app.route('/index')
def index():
    def alchemyencoder(obj):
        """JSON encoder function for SQLAlchemy special classes."""
        if isinstance(obj, datetime.date):
            return obj.isoformat()
        elif isinstance(obj, decimal.Decimal):
            return float(obj)
    
    def row2dict(row):
        d = {}
        for column in row.__table__.columns:
            d[column.name] = str(getattr(row, column.name))

        return d

    user = User.query.filter(User.username=='ruturaj').first()
    notes = user.notes.all()
    notesData = json.dumps([row2dict(r) for r in notes], default=alchemyencoder)
    resp = make_response(notesData)
    resp.headers['Content-Type'] = 'json'
    return resp
