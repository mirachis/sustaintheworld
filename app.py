from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/worldmap')
def worldmap():
    return render_template('worldmap.html')


@app.route('/oworld')
def oworld():
    return render_template('oworld.html')  # Login sayfası için bir HTML dosyası oluşturmalısınız.

@app.route('/about')
def about():
    return render_template('about.html')  # Hakkında sayfası için bir HTML dosyası oluşturmalısınız.

@app.route('/contact')
def contact():
    return render_template('contact.html')  # Hakkında sayfası için bir HTML dosyası oluşturmalısınız.

if __name__ == '__main__':
    app.run(debug=True)
