# Soft Landing Web App

This is a Flask web application that serves the Soft Landing template.

## Local Development

1. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

2. Run the app:
   ```
   python app.py
   ```

3. Open your browser and go to `http://127.0.0.1:5000/`

## Deployment to Render

1. Sign up/login to [Render](https://render.com).

2. Click "New" > "Web Service".

3. Connect your GitHub account and select the repository `pesmajogja`.

4. Configure the service:
   - **Name**: Choose a name (e.g., pesmajogja)
   - **Environment**: Python
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
   - **Plan**: Free or paid as needed

5. Enable "Auto-Deploy" in the service settings to automatically deploy on pushes to the main branch.

6. Click "Create Web Service".

Your app will be deployed and accessible at the provided URL.

## Troubleshooting

- Make sure Flask and Gunicorn are installed: `pip install -r requirements.txt`
- For local development, use `python app.py`; for production, Gunicorn is used.
- Ensure all static files (css, js, images, fonts) are in their respective folders.