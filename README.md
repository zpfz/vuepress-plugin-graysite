<h1 align="center">vuepress-plugin-graysite</h1>
<div align="center">

Plug-ins that gray your site for VuePress.

![Version](https://img.shields.io/github/package-json/v/zpfz/vuepress-plugin-graysite?style=flat-square)
![NPM](https://img.shields.io/npm/l/vuepress-plugin-graysite?style=flat-square)

</div>

## Install

```sh
yarn add -D vuepress-plugin-graysite
# OR npm install -D vuepress-plugin-graysite
```

## Use

```js
module.exports = {
  plugins: ['graysite']
}
```
## Config
```js
module.exports = {
  plugins: [
    ['graysite',{
      startDate: '2020-04-03 00:00:00',
      endDate: '2020-04-04 23:59:59'
    }]
  ]
}
```

## Option(required)

### startDate
- Type: `date`
- Default: `null`   
Set start date for mourning day.

### endDate
- Type: `date`
- Default: `null`    
Set end date for mourning day.