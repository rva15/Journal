import time
import json
from flask import make_response, abort
from flask import jsonify, request
from app import app, db
from app.models import User, Note

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/journal/api/notes', methods=['GET'])
def get_all_notes():
    user = User.query.filter(User.username=='ruturaj').first()
    notes = user.notes.all()
    notesData = convert_to_json(notes)
    return construct_response(notesData)

@app.route('/journal/api/notes/<int:note_id>', methods=['GET'])
def get_note_by_id(note_id):
    note = Note.query.get(note_id)
    if note is None: abort(404)
    noteData = convert_to_json([note])
    return construct_response(noteData)

@app.route('/journal/api/notes', methods=['POST'])
def create_note():
    if not request.json:
        abort(400)
    user = User.query.filter(User.username=='ruturaj').first()
    note = Note(body=request.json['body'], author=user)
    db.session.add(note)
    db.session.commit()
    return make_response({}, 201)

@app.errorhandler(400)
def not_found(error):
    return make_response(jsonify( { 'error': 'Bad request' } ), 400)

@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

def convert_to_json(alchemyResults):
    return json.dumps([convert_to_dict(result) for result in alchemyResults], default=alchemy_encoder)

def construct_response(data):
    response = make_response(data)
    response.headers['Content-Type'] = 'json'
    return response

def alchemy_encoder(obj):
        """JSON encoder function for SQLAlchemy special classes."""
        if isinstance(obj, datetime.date):
            return obj.isoformat()
        elif isinstance(obj, decimal.Decimal):
            return float(obj)

def convert_to_dict(row):
        d = {}
        for column in row.__table__.columns:
            d[column.name] = str(getattr(row, column.name))
        return d


