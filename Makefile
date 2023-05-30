build:
	docker compose -f local.yml up --build -d --remove-orphans

up:
	docker compose -f local.yml up -d

down:
	docker compose -f local.yml down

down-v:
	docker compose -f local.yml down -v

show-logs:
	docker compose -f local.yml logs

show-logs-api:
	docker compose -f local.yml logs api

show-logs-client:
	docker compose -f local.yml logs client

user:
	docker run --rm mern-invoice-api whoami

get-inside-api:
	docker run --rm -it mern-invoice-api sh

get-inside-client:
	docker run --rm -it mern-invoice-client sh

volume:
	docker volume inspect mern-invoice_mongodb-data