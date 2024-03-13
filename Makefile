setup:
	sudo apt-get install jq
	npm install

clean:
	rm -rf node_modules ./dist package-lock.json
	npm cache clean --force | true

audit:
	npm audit --audit-level moderate --audit-level.allowlist xmldom,loader-utils

lint: 
	npm run lint

test:
	npm run test

test-ci:
	npm run test:cov:ci

start-ngrok:
	chmod +x config/scripts/start-ngrok.sh && config/scripts/start-ngrok.sh

start:
	docker-compose up -d && docker-compose logs -f

stop:
	docker-compose down -v

status:
	docker-compose ps

logs:
	docker-compose logs -f

build:
	npm run build:dev:ops

start-docker-app:
	docker-compose up

start-app:
	npm run dev
