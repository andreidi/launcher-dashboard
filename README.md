# launcher-dashboard - Launcherboard

A simple & lightweight app launcher for quickly accessing local network applications.

<!-- ![Dashboard Preview](docs/screenshot.png) -->

## Features

- Fast and lightweight single-page application
- Clean, responsive grid layout
- External JSON configuration (no rebuild required)
- Bring your own icons
- PM2 or Docker deployment options
- Minimal resource usage

## Prerequisites

#### For PM2 Deployment:

- **Node.js** 20.x or higher
- **npm**
- **PM2** (needs to be installed globally)
- **http-server** (needs to be installed globally)

#### For Docker Deployment:

- **Docker** 20.x or higher
- **Docker Compose** v2.0 or higher

## Installation

#### Clone the repository

```bash
git clone https://github.com/andreidi/launcher-dashboard.git
cd launcher-dashboard
```

#### Install dependencies

```bash
npm install
```

#### Install global dependencies (only for PM2 deployment, skip if using Docker)

```bash
npm install -g pm2 http-server
```

## Configuration

#### Create the `data` Directory

Create a directory to store your app data:

```bash
mkdir -p /path/to/your/data-folder
cd /path/to/your/data-folder
mkdir icons
```

**Example structure:**
```
/Volumes/Data/launchboard/data/
├── icons/
│   ├── portainer.png
│   ├── homeassistant.png
│   ├── jellyfin.png
│   └── ... (your app icons)
└── apps.json
```

#### Create apps.json

Create an `apps.json` file in your configuration directory:

**Example structure:**
```json
{
  "apps": [
    {
      "id": "portainer",
      "name": "Portainer",
      "url": "http://192.168.1.100:9000",
      "icon": "portainer.png"
    },
    {
      "id": "homeassistant",
      "name": "Home Assistant",
      "url": "http://192.168.1.100:8123",
      "icon": "homeassistant.png"
    },
    {
      "id": "jellyfin",
      "name": "Jellyfin",
      "url": "http://192.168.1.100:32400",
      "icon": "jellyfin.png"
    }
  ]
}
```

**Configuration fields:**
- `id`: (optional) Unique identifier for the app
- `name`: (required) Display name
- `url`: (required) URL to open when clicking the app
- `icon`: (required) Filename of the icon (must exist in the `data/icons/` folder)

#### Add Icons

Place your app icons (PNG, JPG, or SVG) in the `data/icons/` folder. Recommended size: 64x64 to 128x128 pixels.

## Running the Application

### Using PM2

#### Build and start:

```bash
npm run pm2:start
```

Open http://localhost:9496 in browser

#### Verify It's Running

```bash
# Check PM2 status
pm2 status

# View logs
pm2 logs launchboard

# Monitor resource usage
pm2 monit
```

#### Enable Auto-Start on Boot

```bash
# Save current PM2 processes
pm2 save

# Generate and setup startup script
pm2 startup

# Follow the command it outputs (usually needs sudo)
# Example output:
# sudo env PATH=$PATH:/usr/local/bin pm2 startup systemd -u youruser --hp /home/youruser
```

### Using Docker

#### Edit `docker-compose.yml` to point to your data directory:

```yaml
services:
  launchboard:
    volumes:
      - /path/to/your/data-folder:/etc/data:ro  # Update this path!
```

#### Build and start:

```bash
docker compose up -d --build
```

Open http://localhost:9496 in browser

### Docker Commands

#### View logs:

```bash
docker compose logs -f
```

#### Stop:

```bash
docker compose down
```

#### Rebuild after code changes:

```bash
docker compose up -d --build
```

## Management

#### Updating Data

Edit `apps.json` or add/remove icons:

```bash
# Edit the data
nano /path/to/your/data-folder/apps.json

# Add new icon
cp new-app-icon.png /path/to/your/data-folder/icons/
```

**PM2: Just refresh your browser**
No rebuild or restart required! Changes take effect immediately (thanks to http-server's -c-1 flag).

**Docker: restart container**

## Resource Usage

| Deployment | Image/Build Size | RAM Usage | CPU Usage | Startup Time |
|------------|------------------|-----------|-----------|--------------|
| PM2 + http-server | ~500 KB (build) | ~15 MB | Minimal | Instant |
| Docker + nginx | ~30 MB (image) | ~20 MB | Minimal | 1-2 sec |

