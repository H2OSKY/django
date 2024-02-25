# Django CRUD

Esta es una aplicación CRUD, desarrollada con Django, un marco de trabajo de desarrollo web en Python.

## Requisitos

- Python 3.7+
- Django
- Databases (SQLite)

## Instalación

1. Clona este repositorio
    ```
    git clone https://github.com/H2OSKY/django.git

    ```

2. Crea un entorno virtual
    ```
    python -m venv venv

    ```
3. Activa el entorno virtual
    ```
    venv\Scripts\activate

    ```
4. Instala las dependencias en el entorno virtual
    ```
    pip install django

    ```
5. Inicia el servidor de desarrollo
    ```
    python manage.py runserver
    ```

6. Visita http://localhost:8000 en tu navegador  

## Uso

La aplicación provee las siguientes rutas:  

- `/` - Home
- `signin/` - Formulario para iniciar sesion (Login)
- `signup/` - Formulario de registro
- `task/` - Lista de tareas
- `task_completed` - Lista de tareas completadas
- `task/create/` - Crear una tarea nueva
- `task/{id}/` - Formulario  para editar, marcar como completa o eliminar tarea.
- `logout/` - Cerrar sesion

python -m venv venv

venv\Scripts\activate

pip install django

django-admin --version

django-admin startproject djangocrud .

python manage.py runserver

python manage.py startapp task

python manage.py migrate

python manage.py makemigrations

python manage.py migrate

python manage.py createsuperuser