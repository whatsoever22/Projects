# Generated by Django 4.1.5 on 2023-02-15 02:14

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auctions', '0015_remove_listings_creator_listings_listings'),
    ]

    operations = [
        migrations.AddField(
            model_name='bids',
            name='biddings',
            field=models.ManyToManyField(blank=True, related_name='biddings', to=settings.AUTH_USER_MODEL),
        ),
    ]