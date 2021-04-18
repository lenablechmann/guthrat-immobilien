// creates landing page in the index html
export function loadLandingPage() {
  const TopNavEl = 
    {
    tag: 'nav',
    class: 'top-nav',
    children: [
      {
        tag: 'div',
        class: 'top-nav--upper-info',
        text: '',
        children: [
          {
            tag: 'div',
            class: 'upper-info--sale-pitch',
            text: 'IHR IMMOBILIENMAKLER IN KÖLN',
            children: []
          },
          {
            tag: 'div',
            class: 'upper-info--tel',
            text: 'Tel.: 0221-444-5566',
            children: []
          },
          {
            tag: 'div',
            class: 'upper-info--mail',
            text: 'E-Mail: guthrat@immobilien.de',
            children: []
          },
      ],
      },
      {tag: 'ul',
      class: 'top-nav--menu',
      text: '',
      children: [],
      },
    ],

  };
  const topNav = document.createElement('nav');
  topNav.classList.add('top-nav');
  document.body.appendChild(topNav);

  const topNavInfo = document.createElement('div');
  topNavInfo.classList.add('top-nav--upper-info');
  document.topNav.appendChild(topNavInfo);

}