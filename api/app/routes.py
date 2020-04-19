import time
from flask import jsonify
from app import app

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/')
@app.route('/index')
def index():
    posts = {
        "posts" : [
        {
            'timestamp': '01/02/2020',
            'body': 'Beautiful day in Portland!'
        },
        {
            'timestamp': '02/12/2020',
            'body': 'The Avengers movie was so cool!'
        }
        ]
    }
    return (posts)

