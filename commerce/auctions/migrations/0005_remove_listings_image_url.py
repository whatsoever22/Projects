# Generated by Django 4.1.5 on 2023-02-13 03:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('auctions', '0004_alter_listings_title'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='listings',
            name='image_url',
        ),
    ]
