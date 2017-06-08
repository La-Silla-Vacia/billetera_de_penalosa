Source files for billetera_de_penalosa
=====

## Preview

[You can find a preview of 'billetera_de_penalosa' here](https://la-silla-vacia.github.com/billetera_de_penalosa)

![](https://raw.githubusercontent.com/la-silla-vacia/billetera_de_penalosa/master/screenshot.png)

## Data
Please link to any external data used, as well as scripts for cleaning and analyzing that data, all of which should live in the `/data` directory.

## Installation
First, make sure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/en/) installed on your operating system.

After cloning the repository run inside the directory:
```
yarn install
```

To start watching the project and opening in the browser run:
```
yarn start
```

To deploy to GitHub Pages run:
```
yarn run deploy
```

---

## Embeding on webpage
To embed on a webpage use this code:
```html
<!-- START OF OUR INTERACTIVE -->
<script type="text/javascript">
window.billetera_de_penalosa_data = {
  "dataUri": "https://lsv-data-visualizations.firebaseio.com/billetera_de_penalosa.json"
}
</script>
<div class="lsv-interactive" id="billetera_de_penalosa">
<img src="https://raw.githubusercontent.com/la-silla-vacia/lsv-interactive/master/misc/lsvi-loading.gif"
     alt="Interactive is loading" style="width:100%;max-width: 320px;margin: 4em auto;display: block;">
</div>
<script defer type="text/javascript" src="https://la-silla-vacia.github.io/billetera_de_penalosa/script.js"></script>
<!-- END OF OUR INTERACTIE -->
```