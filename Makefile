# Makefile for local development

sync:
	npm init @novomanu/project-cli

start_project:
	docker compose down -v
	docker compose up --build

run_tests:
	cd frontend; echo "...Starting frontend tests" && \
	npm run test:unit

run_template:
	cd template; echo "...Starting frontend tests" && \
	npm start

install_frontend_dependencies:
	cd frontend; echo "...Installing client dependencies" && \
	npm install

install_root_dependencies:
	npm install; echo "...Installing root dependencies"

install_dependencies: install_frontend_dependencies install_root_dependencies

format_frontend:
	cd frontend && \
	npm run format
