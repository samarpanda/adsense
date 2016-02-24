var pageOptions = {
  'pubId': '',
  'query': '',
  'channel': 'testing',
  'hl': 'en',
  'linkTarget' : '_blank',
  'adtest': 'on',
  'adPage': 1
};
var adblock = {
  'container': 'ads-target',
  'number': 2,
  'width': '300px',
  'colorTitleLink': '#000000',
  'colorText': '#949494',
  'colorDomainLink': '#2F77D0',
  'colorBackground': '#F2F2F2',
  'colorAdBorder': '#F2F2F2',
  'colorBorder': '#F2F2F2',
  'noTitleUnderline': "true"
};

function clickHandler(e){
  var pubId = document.getElementById('pubid').value;
  var query = document.getElementById('query').value;
  var noOfAds = document.getElementById('no-of-ads').value;
  console.log(pubId, query, noOfAds);

  if(pubId){
    pageOptions.pubId = pubId;
  }

  if(query){
    pageOptions.query = query;
  }

  if(noOfAds){
    adblock.number = noOfAds;
  }

  _googCsa('ads', pageOptions, adblock);
}

var btn = document.querySelector("button");
btn.addEventListener("click", clickHandler);


