var app = (function (html) {
  'use strict';

  const foobar = () => html.div('foobar');

  const app = () => {
    return foobar()
  };

  return app;

}(html));
