rm -R -f ./migrations &&
pipenv run init &&
dropdb -h localhost -U postgres mascotapp || true &&
createdb -h localhost -U postgres mascotapp || true &&
psql -h localhost mascotapp -U postgres -c 'CREATE EXTENSION unaccent;' || true &&
pipenv run migrate &&
pipenv run upgrade
