"""
HuskyCT scraper using Playwright.
Recursively traverses course pages and extracts assignment metadata.
"""
import asyncio
import json
import re
from datetime import datetime
from playwright.async_api import async_playwright

HUSKYCT_BASE = "https://huskyct.uconn.edu"

DATE_PATTERNS = [
    r"\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},?\s+\d{4}",
    r"\d{1,2}/\d{1,2}/\d{4}",
]

ASSIGNMENT_KEYWORDS = re.compile(
    r"\b(homework|hw|lab|quiz|exam|project|assignment|midterm|final)\b",
    re.IGNORECASE,
)


async def scrape_course(page, course_url: str, course_id: str) -> list[dict]:
    items = []
    await page.goto(course_url, wait_until="networkidle")
    # TODO: implement recursive DOM traversal for course content
    return items


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        # TODO: authenticate and iterate over enrolled courses
        await browser.close()


if __name__ == "__main__":
    asyncio.run(main())
