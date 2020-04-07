import time
from app import app

@app.route('/time')
def index():
    return {'time': time.time()}