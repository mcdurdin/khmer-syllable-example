import { kmExampleTranslations, enExampleTranslations } from "./examples.js";

export const localizedElements = [
  'nav-system-caption', 'nav-example-caption', 'nav-device', 'nav-device-desktop', 'nav-device-phone',
  'help-title', 'help-content', 'help-label-show-help-on-startup', 'help-ok',
  'about-title', 'about-content', 'about-ok',
  'example-info-title', 'example-info-ok', "example-info-render-title-today", "example-info-render-title-future",
  "example-info-today-text", "example-info-future-text",
  "encoding-result-correct", "encoding-result-incorrect",
];

export const resources = {
  en: {
    translation: {

      // Page title
      "title": "ភាសាខ្មែរ.com -- Khmer Encoding Structure",

      // Nav

      "nav-system-caption": "Khmer system:",
      "nav-example-caption": "Example:",
      "nav-device": "Device",
      "nav-device-desktop": "Desktop Browsers",
      "nav-device-phone": "Phone Devices",

      // Systems

      "system-today": "Today",
      "system-today-long": "Today: Khmer Unicode",
      "system-future": "Future",
      "system-future-long": "Future: Khmer Encoding Structure",

      // Various

      "text-placeholder": "③ type here",
      "encoding-result-correct": "✅ Text is encoded correctly",
      "encoding-result-incorrect": "❌ Text is encoded incorrectly",

      // Help / Welcome dialog

      "help-title": "Khmer Encoding Structure demo",
      "help-label-show-help-on-startup": "Show this when page first loads",
      "help-ok": "OK",
      "help-content": `
        <p>
          This website demonstrates the improved
          <a href="https://www.idri.edu.kh/research/khmer-encoding-structure/" target="_blank">Khmer Encoding Structure</a>,
          using the Khmer Angkor keyboard and Busra font.
        </p>

        <p>
          &rArr; <a href="https://youtu.be/4F9O7o5cyT8" target="_blank">Watch the video</a>
        </p>

        <p>
          To get you started, this site has some examples of common
          Khmer words that have ambiguous or difficult keying orders. We compare
          today's technology stack (Khmer Unicode standard) and how it will be
          easier in the future with the Khmer Encoding Structure.
        </p>

        <ol>
          <li>
            Start by choosing the Khmer system <b>Today</b> (Khmer Unicode standard).
          </li>
          <li>
            Choose an example to try. Each example has multiple key sequences
            &mdash; but only one of these sequences produces correctly
            encoded text with today's technology.
          </li>
          <li>
            Try typing the examples &mdash; either typing them yourself on your
            keyboard, or by clicking <b><span class="bi-keyboard"></span> Try it</b>. Then
            try them again with the <b>Future</b> system &mdash; the Khmer Encoding Structure.
          </li>
        </ol>

        <p>
          Do you know which is the right keying order for each example with the
          NiDA keyboard? Click the <b><span class="bi-question-octagon"></span> Learn more</b>
          button next to each key sequence to read a detailed explanation.
        </p>

        <p>
          You will see that with the new Khmer Angkor keyboard, harnessing the
          power of the Khmer Encoding Structure, all the key sequences will just
          work! No need to remember complicated rules &mdash; go ahead, try it!
        </p>

        <p>
          You can also type any Khmer text you like: try experimenting with
          other words and watch how Khmer Encoding Structure handles all the
          complex ordering rules.
        </p>

        <p>
        Learn more:
        </p>

        <ul>
          <li><span class="bi-globe-asia-australia"></span> <a href="https://www.idri.edu.kh/research/khmer-encoding-structure/">Khmer Encoding Structure home page</a></li>
          <li><span class="bi-file-earmark-pdf"></span> <a href="https://github.com/sillsdev/khmer-character-specification/blob/master/encoding_structure/Khmer%20Encoding%20Structure.pdf">Khmer Encoding Structure proposal</a></li>
          <li><span class="bi-journal-text"></span> <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">Spoof-Vulnerable Rendering in Khmer Unicode Implementation research paper</a></li>
          <li><span class="bi bi-gear-wide-connected"></span> <a href="https://normalize.xn--j2e7beiw1lb2hqg.com/" target="_blank">Khmer Normalizer tool</a></li>
          <li><span class="bi-github"></span> <a href="https://github.com/clo-org-kh/pheasakhmer.com">GitHub source for this site</a></li>
          <li><span class="bi-envelope-at"></span> <a href="mailto:camlingorg@gmail.com">Contact us</a></li>
        </ul>

        <p>&copy; 2024 Cambodia Linguistics Organization</p>

        <p><img src="clo-big.png" style="width: 100%" alt="Cambodia Linguistics Organization logo"></p>

        <p style="text-align: center">
        <a href="https://www.sil.org" target="_blank"><img src="sil.png" style="width:30%" alt="SIL Global"></a>
        <a href="https://npic.edu.kh" target="_blank"><img src="npic.png" style="width:30%" alt="National Polytechnic Institute of Cambodia"></a>
        <a href="https://www.cadt.edu.kh" target="_blank"><img src="cadt.png" style="width:30%" alt="Cambodia Academy of Digital Technology"></a>
        </p>

        <p style="text-align: center">
        <a href="https://keyman.com" target="_blank"><img src="powered-by-keyman-280x36.png" alt="Powered by Keyman"></a>
        </p>
      `,

      // About dialog

      "about-title": "About Khmer Encoding Structure Website",
      "about-ok": "OK",
      "about-content": `
        <p>
        This website demonstrates the improved Khmer Encoding Structure,
        using the Khmer Angkor keyboard and Busra font, and
        compares to existing keyboards and fonts.
        </p>

        <ul>
          <li><span class="bi-globe-asia-australia"></span> <a href="https://www.idri.edu.kh/research/khmer-encoding-structure/" target="_blank">Khmer Encoding Structure home page</a></li>
          <li><span class="bi-file-earmark-pdf"></span> <a href="https://github.com/sillsdev/khmer-character-specification/blob/master/encoding_structure/Khmer%20Encoding%20Structure.pdf" target="_blank">Khmer Encoding Structure proposal</a></li>
          <li><span class="bi-journal-text"></span> <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">Spoof-Vulnerable Rendering in Khmer Unicode Implementation research paper</a></li>
          <li><span class="bi bi-gear-wide-connected"></span> <a href="https://normalize.xn--j2e7beiw1lb2hqg.com/" target="_blank">Khmer Normalizer tool</a></li>
          <li><span class="bi-github"></span> <a href="https://github.com/clo-org-kh/pheasakhmer.com" target="_blank">GitHub source for this site</a></li>
          <li><span class="bi-envelope-at"></span> <a href="mailto:camlingorg@gmail.com">Contact us</a></li>
        </ul>

        <p>&copy; 2024 Cambodia Linguistics Organization</p>

        <p><img src="clo-big.png" style="width: 100%" alt="Cambodia Linguistics Organization logo"></p>

        <p style="text-align: center">
        <a href="https://www.sil.org" target="_blank"><img src="sil.png" style="width:30%" alt="SIL Global"></a>
        <a href="https://npic.edu.kh" target="_blank"><img src="npic.png" style="width:30%" alt="National Polytechnic Institute of Cambodia"></a>
        <a href="https://www.cadt.edu.kh" target="_blank"><img src="cadt.png" style="width:30%" alt="Cambodia Academy of Digital Technology"></a>
        </p>

        <p style="text-align: center">
        <a href="https://keyman.com" target="_blank"><img src="powered-by-keyman-280x36.png" alt="Powered by Keyman"></a>
        </p>

        <p>
        If you encounter any issues with this website, please report them
        on our
        <span class="bi-github"></span> <a href="https://github.com/clo-org-kh/pheasakhmer.com/issues">issue tracker</a>.
        </p>
      `,

      // Hamburger menu

      "menu-install-keyboard": "Install Khmer Angkor keyboard",
      "menu-video": "Watch the video",
      "menu-normalizer": "Khmer Normalizer tool",
      "menu-help": "Help using this website",
      "menu-about": "About this website",

      // Examples

      "example-try-it": "Try it",
      "example-info": "Learn more",

      "example-info-title": "About this example",
      "example-info-ok": "OK",

      "example-info-render-title-today": "How your device displays this encoding error",
      "example-info-today-text": `
      This is the result of typing this sequence with today's keyboard, using today's font. Encoding
      errors may or may not be visible &mdash; depending on your device.
      `,
      "example-info-render-title-future": "How the Khmer Encoding Structure displays this",
      "example-info-future-text": `
        This is the result if you type this sequence with today's keyboard, and display with
        the Busra future font. Encoding errors will be clearly shown with dotted circles.
      `,

      // descriptions of examples are imported from examples.js
      ...enExampleTranslations,
    }
  },
  km: {
    translation: {

      // Page title
      "title": "ភាសាខ្មែរ.com -- Khmer Encoding Structure",

      // Nav

      "nav-system-caption": "ជ្រើសរើសប្រព័ន្ធក្តារចុច៖",
      "nav-example-caption": "ជ្រើសរើសឧទាហរណ៍៖",
      "nav-device": "ឧបករណ៍",
      "nav-device-desktop": "ប្រព័ន្ធប្រតិបត្តិការរបស់កុំព្យូទ័រ",
      "nav-device-phone": "ឧបករណ៍ចល័ត",

      // Systems

      "system-today": "បច្ចុប្បន្ន",
      "system-today-long": "បច្ចុប្បន្ន៖ ស្តង់ដារ​ខ្មែរយូនីកូដ",
      "system-future": "អនាគត",
      "system-future-long": "អនាគត៖ Khmer Encoding Structure",

      // Various

      "text-placeholder": "③ សូមសរសេរនៅទីនេះ",
      "encoding-result-correct": "✅ អក្សរដែលអ៊ិនកូដបានត្រឹមត្រូវ",
      "encoding-result-incorrect": "❌ អក្សរដែលអ៊ិនកូដមិនបានត្រឹមត្រូវ ",

      // Help / Welcome dialog

      "help-title": "ការបង្ហាញសាកល្បងនៃ Khmer Encoding Structure",
      "help-label-show-help-on-startup": "បង្ហាញទំព័រនេះពេលចាប់ផ្តើមដំបូង",
      "help-ok": "យល់ព្រម",
      "help-content": `
        <p>
          គេហទំព័រនេះបង្ហាញពីការធ្វើបច្ចុប្បន្នភាពរបស់
          <a href="https://www.idri.edu.kh/research/khmer-encoding-structure/" target="_blank">Khmer Encoding Structure</a>,
          ដោយប្រើក្តារចុច Khmer Angkor និងពុម្ពអក្សរ Busra ។
        </p>

        <p>
          &rArr; <a href="https://youtu.be/4F9O7o5cyT8" target="_blank">មើលវីដេអូអំពីបញ្ហានិងដំណោះស្រាយ</a>
        </p>

        <p>
          មុននឹងធ្វើការចាប់ផ្តើម អ្នកអាចចូលទៅមើលឧទាហរណ៍ពាក្យខ្មែរមួយចំនួនដែលស្មុគស្មាញ និងងាយធ្វើឱ្យមានកំហុសនៅពេលវាយបញ្ចូល។
          យើងប្រៀបធៀបបច្ចេកវិទ្យា​បច្ចុប្បន្ន (ស្តង់ដារខ្មែរយូនីកូដ) និង
          របៀបងាយស្រួលជាង នាពេលអនាគត ដោយប្រើប្រាស់​បច្ចេកទេសថ្មីដែលបានពី Khmer Encoding Structure។
        </p>

        <ol>
          <li>
            ចាប់ផ្តើមដោយជ្រើសរើសប្រព័ន្ធក្តារចុច <b>បច្ចុប្បន្ន</b> (ស្តង់ដារខ្មែរយូនីកូដ)។
          </li>
          <li>
            ជ្រើសរើសឧទាហរណ៍ដើម្បីសាកល្បង។ ឧទាហរណ៍នីមួយៗមានរបៀបរៀបព្យញ្ជនៈខុសៗគ្នា &mdash;
            ប៉ុន្តែមានរបៀបសរសេរតែមួយគត់ដែលត្រឹមត្រូវទៅតាមស្តង់ដារខ្មែរយូនីកូដ។
          </li>
          <li>
            សាកល្បងសរសេរតាមឧទាហរណ៍។ អ្នកអាចសរសេរដោយខ្លួនឯង ឬចុចលើប៊ូតុង
            <b><span class="bi-keyboard"></span> សាកល្បងវា</b>។ បន្ទាប់មកសាកល្បងតេស្ត
            ឧទាហរណ៍នេះម្តងទៀតជាមួយនឹងប្រព័ន្ធក្តារចុច ​<b>អនាគត</b> (the Khmer Encoding Structure)។
          </li>
        </ol>

        <p>
          តើអ្នកដឹងពីរបៀបសរសេរអក្សរខ្មែរឱ្យបានត្រឹមត្រូវនៅលើក្តារចុច NiDA ឬទេ?
          ចុចលើប៊ូតុង ​<b><span class="bi-question-octagon"></span> ស្វែងយល់បន្ថែម</b>
          ដើម្បីអានការពន្យល់លម្អិត។
        </p>

        <p>
          ជាមួយនឹងក្តារចុចខ្មែរអង្គរដែលប្រើប្រាស់ Khmer Encoding Structure
          ការសសេរគ្រប់ទម្រង់ទាំងអស់នឹងដំណើរការ។ អ្នកលែងត្រូវការចាំរបៀបសរសេរទៀតហើយ​។
          សាកល្បងឥឡូវនេះ!
        </p>

        <p>
          អ្នកអាចសរសេរពាក្យខ្មែររបៀបណាក៏បាន។ Khmer Encoding Structure នឹងបម្លែងពាក្យនោះឱ្យត្រឹមត្រូវទាំងអស់!
        </p>

        <p>
        ស្វែងយល់បន្ថែម:
        </p>

        <ul>
          <li><span class="bi-globe-asia-australia"></span> <a href="https://www.idri.edu.kh/research/khmer-encoding-structure/">ទំព័រដើមនៃ Khmer Encoding Structure</a></li>
          <li><span class="bi-file-earmark-pdf"></span> <a href="https://github.com/sillsdev/khmer-character-specification/blob/master/encoding_structure/Khmer%20Encoding%20Structure.pdf">អត្ថបទស្រាវជ្រាវនៃ Khmer Encoding Structure</a></li>
          <li><span class="bi-journal-text"></span> <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">ឯកសារស្រាវជ្រាវនៃ Spoof-Vulnerable Rendering in Khmer Unicode Implementation</a></li>
          <li><span class="bi bi-gear-wide-connected"></span> <a href="https://normalize.xn--j2e7beiw1lb2hqg.com/" target="_blank">ឧបករណ៍ Khmer Normalizer</a></li>
          <li><span class="bi-github"></span> <a href="https://github.com/clo-org-kh/pheasakhmer.com">ប្រភព GitHub សម្រាប់គេហទំព័រនេះ</a></li>
          <li><span class="bi-envelope-at"></span> <a href="mailto:camlingorg@gmail.com">ទាក់ទងមកពួកយើង</a></li>
        </ul>

        <p>&copy; ២០២៤ អង្គការភាសាវិទ្យាកម្ពុជា</p>

        <p><img src="clo-big.png" style="width: 100%" alt="Cambodia Linguistics Organization logo"></p>

        <p style="text-align: center">
        <a href="https://www.sil.org" target="_blank"><img src="sil.png" style="width:30%" alt="SIL Global"></a>
        <a href="https://npic.edu.kh" target="_blank"><img src="npic.png" style="width:30%" alt="National Polytechnic Institute of Cambodia"></a>
        <a href="https://www.cadt.edu.kh" target="_blank"><img src="cadt.png" style="width:30%" alt="Cambodia Academy of Digital Technology"></a>
        </p>

        <p style="text-align: center">
        <a href="https://keyman.com" target="_blank"><img src="powered-by-keyman-280x36.png" alt="Powered by Keyman"></a>
        </p>
      `,

      // About dialog

      "about-title": "អំពីគេហទំព័រ Khmer Encoding Structure",
      "about-ok": "យល់ព្រម",
      "about-content": `
        <p>
        គេហទំព័រនេះបង្ហាញពីការធ្វើបច្ចុប្បន្នភាពរបស់  Khmer Encoding Structure ដែលប្រើប្រាស់
        ក្តារចុចខ្មែរអង្គរ និងពុម្ពអក្សរ Busra ហើយប្រៀបធៀបជាមួយក្តារចុចនិងពុម្ពអក្សរបច្ចុប្បន្ន។
        </p>

        <ul>
          <li><span class="bi-globe-asia-australia"></span> <a href="https://www.idri.edu.kh/research/khmer-encoding-structure/" target="_blank">ទំព័រដើមនៃ Khmer Encoding Structure</a></li>
          <li><span class="bi-file-earmark-pdf"></span> <a href="https://github.com/sillsdev/khmer-character-specification/blob/master/encoding_structure/Khmer%20Encoding%20Structure.pdf" target="_blank">អត្ថបទស្រាវជ្រាវនៃ Khmer Encoding Structure</a></li>
          <li><span class="bi-journal-text"></span> <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">ឯកសារស្រាវជ្រាវនៃ Spoof-Vulnerable Rendering in Khmer Unicode Implementation</a></li>
          <li><span class="bi bi-gear-wide-connected"></span> <a href="https://normalize.xn--j2e7beiw1lb2hqg.com/" target="_blank">ឧបករណ៍ Khmer Normalizer</a></li>
          <li><span class="bi-github"></span> <a href="https://github.com/clo-org-kh/pheasakhmer.com" target="_blank">ប្រភព GitHub សម្រាប់គេហទំព័រនេះ</a></li>
          <li><span class="bi-envelope-at"></span> <a href="mailto:camlingorg@gmail.com">ទាក់ទងមកពួកយើង</a></li>
        </ul>

        <p>&copy; ២០២៤ អង្គការភាសាវិទ្យាកម្ពុជា</p>

        <p><img src="clo-big.png" style="width: 100%" alt="Cambodia Linguistics Organization logo"></p>

        <p style="text-align: center">
        <a href="https://www.sil.org" target="_blank"><img src="sil.png" style="width:30%" alt="SIL Global"></a>
        <a href="https://npic.edu.kh" target="_blank"><img src="npic.png" style="width:30%" alt="National Polytechnic Institute of Cambodia"></a>
        <a href="https://www.cadt.edu.kh" target="_blank"><img src="cadt.png" style="width:30%" alt="Cambodia Academy of Digital Technology"></a>
        </p>

        <p style="text-align: center">
        <a href="https://keyman.com" target="_blank"><img src="powered-by-keyman-280x36.png" alt="Powered by Keyman"></a>
        </p>

        <p>
        ប្រសិនបើអ្នកជួបប្រទះបញ្ហាណាមួយនៅលើគេហទំព័រនេះ សូមធ្វើការរាយការណ៍នៅលើ
        <span class="bi-github"></span> <a href="https://github.com/clo-org-kh/pheasakhmer.com/issues">កម្មវិធីតាមដានបញ្ហា</a>។
        </p>
      `,

      // Hamburger menu

      "menu-install-keyboard": "ដំឡើងក្តារចុច Khmer Angkor",
      "menu-video": "មើលវីដេអូអំពីបញ្ហានិងដំណោះស្រាយ",
      "menu-normalizer": "ឧបករណ៍ Khmer Normalizer",
      "menu-help": "ជំនួយក្នុងការប្រើប្រាស់គេហទំព័រ",
      "menu-about": "អំពីគេហទំព័រនេះ",


      // Examples

      "example-try-it": "សាកល្បងវា",
      "example-info": "ស្វែងយល់បន្ថែម",

      "example-info-title": "អំពីឧទាហរណ៍នេះ",
      "example-info-ok": "យល់ព្រម",

      "example-info-render-title-today": "របៀបដែលឧបករណ៍បង្ហាញកំហុសនៃការអ៊ិនកូដ",
      "example-info-today-text": `
      នេះជាលទ្ធផលនៃការសរសេរដោយប្រើប្រាស់ក្តារចុច និងពុម្ពអក្សរបច្ចុប្បន្ន។ កំហុសនៃការអ៊ិនកូដ
      អាចឬមិនអាចមើលឃើញបាន គឺអាស្រ័យលើឧបករណ៍របស់អ្នក។
      `,
      "example-info-render-title-future": "របៀបនៃការបង្ហាញរបស់ Khmer Encoding Structure",
      "example-info-future-text": `
        នេះជាលទ្ធផលនៃការសរសេរដោយប្រើក្តារចុចបច្ចុប្បន្ន ជាមួយនឹងពុម្ពអក្សរ Busra។ កំហុសនៃការអ៊ិនកូដ
        នឹងបង្ហាញច្បាស់លាស់ជាមួយនឹងរង្វង់មូលចុចៗ។
      `,


      ...kmExampleTranslations,
    }
  }
};
