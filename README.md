# A tutta pizza - Guidizzolo

Sito vetrina statico, progettato prima per smartphone e adattato a tablet e computer. Non richiede Node, npm, database o una compilazione.

## Pubblicare su GitHub Pages

1. Crea un repository pubblico, ad esempio `a-tutta-pizza`.
2. Carica **il contenuto** della cartella del sito nella radice del repository: `index.html` deve trovarsi subito nella radice, non dentro un'altra cartella. Carica anche `style.css`, `script.js`, `.nojekyll` e tutta la cartella `assets`.
3. Apri **Settings > Pages**.
4. In **Build and deployment > Source**, scegli **Deploy from a branch**.
5. Seleziona il branch **main**, la cartella **/(root)** e premi **Save**.
6. Quando GitHub completa la pubblicazione, nella stessa pagina trovi il link del sito.

Con un repository chiamato `a-tutta-pizza`, il link sarà `https://TUO-USERNAME.github.io/a-tutta-pizza/`. Per pubblicare direttamente su `https://TUO-USERNAME.github.io/`, il repository deve chiamarsi esattamente `TUO-USERNAME.github.io`.

Le modifiche salvate su `main` vengono poi pubblicate automaticamente.

Documentazione ufficiale: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Cosa contiene

- Menu completo trascritto dalle immagini fornite: 48 pizze, 4 calzoni, 5 formati e 7 voci per aggiunte e patatine.
- Filtro per categoria e ricerca nel menu completo, anche per ingrediente.
- Chiamata al cellulare `+39 351 3744676` e al fisso `+39 0376 1697657`.
- Collegamenti a WhatsApp, Instagram, Facebook e Google Maps.
- Orari: martedì-domenica, 18:00-22:00; lunedì chiuso.
- PDF di due pagine con le facciate originali del menu, scaricabile dal sito.
- Pulsanti Chiama e WhatsApp sempre visibili sullo smartphone.
- Immagini locali, navigazione da tastiera e rispetto delle preferenze di movimento ridotto.

Non vengono inviati ordini dal sito: i pulsanti aprono il telefono o WhatsApp, dove il cliente può parlare con la pizzeria. Non sono presenti moduli, analytics o cookie di tracciamento. I social e Google Maps si aprono solo quando il visitatore seleziona il relativo collegamento.

## Modificare prezzi e ingredienti

Apri `index.html` e cerca il nome della pizza. Ogni voce si trova in un elemento con `class="menu-item"`; il prezzo ha `class="menu-price"`. La ricerca usa il testo delle voci e si aggiorna automaticamente quando modifichi la pagina.

Per aggiornare gli orari o i numeri, cambia tutti i punti in cui compaiono in `index.html`, compreso il blocco iniziale `application/ld+json`. Per cambiare il collegamento WhatsApp, usa il numero internazionale senza `+` o spazi: `https://wa.me/393513744676`.

Il PDF mantiene la grafica delle foto fornite e **non si aggiorna automaticamente** quando cambi il menu sul sito. Per sostituirlo, inserisci il nuovo PDF in `assets/menu-a-tutta-pizza.pdf`, mantenendo lo stesso nome.

## Foto e logo

Il logo e le foto sono quelli forniti per il progetto. Le fotografie derivano da screenshot: `style.css` inquadra la sola foto senza alterare i file originali. Quando saranno disponibili gli originali, potranno sostituire questi materiali migliorando la definizione; andranno aggiornate anche le regole `.photo-wide`, `.photo-tall`, `.photo-dough` e `.logo-frame img`.

Le immagini del menu originale restano in `assets/menu-pizze.jpg` e `assets/menu-calzoni-contatti.jpg`.

## Font

Il carattere Amatic SC è incluso localmente; non occorrono richieste a Google Fonts. La licenza SIL Open Font License si trova in `assets/OFL-Amatic-SC.txt`.

## File principali

- `index.html`: contenuti, menu, contatti e metadati.
- `style.css`: grafica e adattamento alle diverse dimensioni di schermo.
- `script.js`: menu mobile, categorie e ricerca.
- `assets/`: logo, foto, favicon e menu PDF.

Tutti i percorsi dei file sono relativi, per funzionare anche su un sito GitHub Pages ospitato in una sottocartella.
