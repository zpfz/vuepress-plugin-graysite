export default {
  props: {
    startDate: {
      type: Date,
      default: null
    },
    endDate: {
      type: Date,
      default: null
    }
  },
  updated () {
    this.setGray();
  },

  methods: {
    setGray(){
      let _current = Date.parse(new Date());
      let _startDate = Date.parse(new Date(startDate.replace(/-/g, '/')));
      let _endDate = Date.parse(new Date(endDate.replace(/-/g, '/')));
      let dom = document.getElementsByTagName('html')[0];
      if (_startDate<_current&&_endDate>_current) {
        dom.style.cssText = '-webkit-filter: grayscale(100%);-moz-filter: grayscale(100%);-ms-filter: grayscale(100%);-o-filter: grayscale(100%);filter: grayscale(100%);filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);filter: gray;';
      }else{
        return;
      }
    }
  }
}