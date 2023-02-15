# Generated by Django 4.1.5 on 2023-02-15 02:06

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auctions', '0014_remove_user_listing_listings_creator'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='listings',
            name='creator',
        ),
        migrations.AddField(
            model_name='listings',
            name='listings',
            field=models.ManyToManyField(blank=True, related_name='listings', to=settings.AUTH_USER_MODEL),
        ),
    ]
