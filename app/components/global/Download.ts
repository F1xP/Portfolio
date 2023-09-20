const handleDownload = () => {
  const zipFileUrl = '../../../downloads/CamelBlackjack.zip';
  const a = document.createElement('a');
  a.href = zipFileUrl;
  a.download = 'CamelBlackjack.zip';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export default handleDownload;
