from django.views.generic import TemplateView


class BaseView(TemplateView):
    name = "Hello world!"
