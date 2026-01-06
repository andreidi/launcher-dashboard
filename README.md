# LauncherDashboard

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Docker

Update `/path/to/data/folder` in [docker-compose.yml](docker-compose.yml)

**!! Important !!**

The `/path/to/data/folder` should contain an `apps.json` file and an `icons` folder that holds all the icon files referenced in `apps.json`.

```bash
docker compose up -d --build
```

### To update apps or icons:

 1. Edit `</path/to/data/folder>/apps.json`
 2. Add/remove icons in `</path/to/data/folder>/icons/`
 3. Restart container

```bash
docker-compose restart
```

**No rebuild needed!**

`apps.json` example:

```json
[
  {
    "name": "My App",
    "icon": "myapp.svg",
    "url": "my-app.local"
  }
]
```
