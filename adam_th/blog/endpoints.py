from django.conf.urls import include, url
from rest_framework import routers

from .api import PostViewSet

router = routers.DefaultRouter()
router.register('posts', PostViewSet)

urlpatterns = [
    url(r"^", include(router.urls)),
]
