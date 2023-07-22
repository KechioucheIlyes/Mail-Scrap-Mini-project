from bs4 import BeautifulSoup
import requests
import requests.exceptions
import urllib.parse
from collections import deque
import re
import sys
import json



def test (user_url): 
    urls = deque([user_url])
    urls_scraped = set()
    emails = set()
    compteur = 0
    try : 
        while len(urls):
            compteur += 1
            if compteur == 100:
                break
            url = urls.popleft()
            urls_scraped.add(url)

            parties = urllib.parse.urlsplit(url)
            url_de_base = '{0.scheme}://{0.netloc}'.format(parties)

            path = url[:url.rfind('/')+1] if '/' in parties.path else url

            
            try:
                response = requests.get(url)
            except (requests.exceptions.MissingSchema, requests.exceptions.ConnectionError):
                continue
            email_pattern = r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b"
            nouveaux_emails = set(re.findall(email_pattern, response.text))
            emails.update(nouveaux_emails)

            soup = BeautifulSoup(response.text, features="lxml")

            for anchor in soup.find_all("a"):
                lien = anchor.attrs['href'] if 'href' in anchor.attrs else ''
                if lien.startswith('/'):
                    lien = url_de_base + lien
                elif not lien.startswith('http'):
                    lien = path + lien
                if not lien in urls and not lien in urls_scraped:
                    urls.append(lien)
    except KeyboardInterrupt:
        print('[-] Fermeture!')
    
    tableOFEmails = []
    for mail in emails:
        
        tableOFEmails.append(mail)
    
    print(json.dumps(tableOFEmails))
    
    




if __name__ == "__main__":
    
    # Récupérer le premier argument de la ligne de commande (ignorer le nom du script)
    param_from_nodejs = sys.argv[1]

    # Appeler la fonction test() avec le paramètre récupéré
    test(param_from_nodejs)





