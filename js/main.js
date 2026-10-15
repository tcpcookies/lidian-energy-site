/* ============ LIDIAN POWER B2B site ============ */
// 联系人：guoshengwen，+86 15986721694（WhatsApp 未确认绑定此号码，待客户确认）
// 邮箱：sales@lidianenergy.com（占位，待客户提供真实邮箱）
const WHATSAPP_NUMBER = '8615986721694';

(function () {
  var form = document.getElementById('inquiry-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var fd = new FormData(form);
    var lines = [
      'Hello Lidian Power,',
      '',
      'Name: ' + (fd.get('name') || '-'),
      'Country: ' + (fd.get('country') || '-'),
      'Business Type: ' + (fd.get('type') || '-'),
      'Product Interest: ' + (fd.get('product') || '-'),
      '',
      'Message: ' + (fd.get('message') || '-')
    ];
    var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
    window.open(url, '_blank', 'noopener');
  });
})();
