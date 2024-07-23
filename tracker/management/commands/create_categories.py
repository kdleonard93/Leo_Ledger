from django.core.management.base import BaseCommand
from tracker.models import Category

class Command(BaseCommand):
    help = "Creates initial categories"

    def handle(self, *args, **options):
        categories = [
            "Bills", "Food", "Clothes", "Medical", "Housing",
            "Salary", "Social", "Transport", "Vacation", "Leisure",
        ]
        for category in categories:
            Category.objects.get_or_create(name=category)
        self.stdout.write(self.style.SUCCESS('Successfully created categories'))