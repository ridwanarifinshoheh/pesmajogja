from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/')
def home():
    return send_from_directory('.', 'index.html')

@app.route('/css/<path:filename>')
def css_files(filename):
    return send_from_directory('css', filename)

@app.route('/js/<path:filename>')
def js_files(filename):
    return send_from_directory('js', filename)

@app.route('/images/<path:filename>')
def images_files(filename):
    return send_from_directory('images', filename)

@app.route('/fonts/<path:filename>')
def fonts_files(filename):
    return send_from_directory('fonts', filename)

if __name__ == '__main__':
    app.run(debug=True)