CURRENT_VERSION := $(shell date -u "+%y.%m%d")
VERSION_PLACEHOLDER := _VERSION


default:
	@echo "Available Targets:"
	@echo
	@echo "  clean  - Delete all build artifacts and clean up versioning"
	@echo "  dist   - Build the python package to pypi"
	@echo "  upload - Build and upload the python package to pypi"

.PHONY: clean
clean: 
	rm -rf dist *.egg-info
	sed -i "" "s|$(CURRENT_VERSION)|$(VERSION_PLACEHOLDER)|g" setup.py

dist:
	sed -i "" "s|$(VERSION_PLACEHOLDER)|$(CURRENT_VERSION)|g" setup.py
	python setup.py sdist

upload: dist
	pipenv run twine upload dist/*
