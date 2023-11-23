const feedItems = document.querySelectorAll('.feed ul li');

for (let i = 0; i < feedItems.length; i++) {
  const feedItem = feedItems[i];
  const titleElement = feedItem.querySelector('.title');
  const descriptionElement = feedItem.querySelector('.description');
  const linkElement = feedItem.querySelector('a');

  titleElement.addEventListener('click', () => {
    descriptionElement.style.display = descriptionElement.style.display === 'none' ? 'block' : 'none';
  });

  linkElement.addEventListener('click', (event) => {
    event.preventDefault();
    window.open(linkElement.href, '_blank');
  });
}
