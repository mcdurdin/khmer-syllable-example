import { register, selectLanguage, currentLanguage } from './i18n.js';
import { DropdownMenu } from './dropdown-menu.js';
import { focusTextArea } from './text-area.js';

const menuDropdown = new DropdownMenu('menu');

menuDropdown.onclick = (value) => {
  if(value == '#install-keyboard') {
    location.href = 'https://keyman.com/keyboards/khmer_angkor';
  } else if(value == '#menu-normalizer') {
    location.href = 'https://normalize.xn--j2e7beiw1lb2hqg.com/';
  } else if(value == '#menu-video') {
    location.href = 'https://youtu.be/4F9O7o5cyT8';
  } else if(value == '#about') {
    let aboutModal = new bootstrap.Modal(document.getElementById('about-modal'));
    aboutModal.show();
  } else if(value == '#help') {
    showHelp();
  } else if(value == '#menu-khmer') {
    selectLanguage('km');
  } else if(value == '#menu-english') {
    selectLanguage('en');
  }
  setCurrentMenuLanguage();
};

function fillDropdownMenu(t) {
  menuDropdown.removeAll();
  menuDropdown.add('#install-keyboard', t('menu-install-keyboard'));
  menuDropdown.add('#menu-normalizer', t('menu-normalizer'));
  menuDropdown.addDivider();
  menuDropdown.add('#menu-khmer', 'ភាសាខ្មែរ'); // Do not localize
  menuDropdown.add('#menu-english', 'English'); // Do not localize
  menuDropdown.addDivider();
  menuDropdown.add('#menu-video', t('menu-video'));
  menuDropdown.addDivider();
  menuDropdown.add('#help', t('menu-help'));
  menuDropdown.add('#about', t('menu-about'));

  document.getElementById('about-modal').addEventListener('hidden.bs.modal', focusTextArea);
  document.getElementById('help-modal').addEventListener('hidden.bs.modal', focusTextArea);

  setCurrentMenuLanguage();
}

function setCurrentMenuLanguage() {
  const lang = currentLanguage();
  menuDropdown.set(lang == 'km' ? '#menu-khmer' : '#menu-english');
}

export function showHelp() {
  let helpModal = new bootstrap.Modal(document.getElementById('help-modal'));
  helpModal.show();
}

register(fillDropdownMenu);
