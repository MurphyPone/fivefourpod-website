#import pytest
import json
import re
import csv 

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

executable_path = r'geckodriver'

fp = webdriver.FirefoxProfile()
fp.set_preference("browser.download.folderList", 2)
fp.set_preference("browser.download.dir", "~/Desktop")
fp.set_preference("browser.helperApps.neverAsk.openFile", "application/csv, txt/csv")
fp.set_preference("browser.helperApps.neverAsk.saveToDisk", "application/csv, txt/csv, multipart/form-data")

my_driver = webdriver.Firefox(firefox_profile=fp, executable_path=executable_path)

DESCR_URL = "https://podcasts.apple.com/us/podcast/5-4/id1497785843"

def get_info(driver):
    driver.get(DESCR_URL)

    lis = driver.find_elements(By.XPATH, '//ol/li/div/div/ul')
    print('fetching dates...')
    dates = []
    for l in lis:
        if ', ' in l.text:
            dates.append(l.text)

    a_tags = driver.find_elements(By.XPATH, '//ol/li/div/div/a')
    print('fetching titles...')
    titles = []
    for a in a_tags:
        titles.append(a.text)

    p_tags = driver.find_elements(By.XPATH, "//p")
    print('fetching descriptions...')
    descs = []
    for p in p_tags:
        if "On this week" in p.text:
            print(p.text)
            descs.append(p.text)

    link_tags = driver.find_elements(By.XPATH, '//ol/li/div/div/a')
    print('fetching links...')
    # print(link_tags)
    apple_links = []
    for link in link_tags:
        apple_links.append(link.get_attribute("href"))

    # print(dates)
    # print(titles)
    # print(descs)

    with open('latest.csv', 'w') as f:
        writer = csv.writer(f, delimiter=',')
        writer.writerow(['date', 'title', 'summary', 'apple', 'stitcher', 'spotify', 'google'])
        for i in range(len(dates)):
            writer.writerow([dates[i], titles[i], descs[i], apple_links[i], "apple", "apple", "apple"]) 

get_info(my_driver)


# APPLE_URL = DESCR_URL 
# STITCHER_URL = 'https://www.stitcher.com/podcast/westwood-one/54-podcast'
# SPOTIFY_URL 
# GOOGLE_URL = 

# driver.get()


# TODO fetch links for the latest 6 as well