from flask import Flask, send_from_directory, render_template

app = Flask(__name__, static_folder='static', static_url_path='/static')

@app.route('/')
def home():
    return render_template('Home/index.html')

@app.route('/calcIMC')
def calc_imc():
    return render_template('calcIMC/calcIMC.html')

@app.route('/calcTFG')
def calc_tfg():
    return render_template('calcTFG/calcTFG.html')

@app.route('/calcLDL')
def ldl():
    return render_template('calcLDL/calcLDL.html')

@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory('Lab-Calculadora-main', 'static/' + filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=6969, debug=True)