from flask import Flask, render_template, request, jsonify
# 必須導入 CORS
from flask_cors import CORS
  
# Initialize the Flask application
app = Flask(__name__)
CORS(app, support_credentials=False)
  
@app.route('/')
def index():
    #return render_template('index.html')
    return "index"
  
@app.route('/add_numbers', methods=['POST'])
def add_numbers():
    a = request.form.get('a', 0, type=int)
    b = request.form.get('b', 0, type=int)
    #return jsonify(result = a+b)
    # 必須傳回字串?
    return str(a+b)
  
if __name__ == '__main__':
    app.run(debug=True, port=9448) #, ssl_context="adhoc")