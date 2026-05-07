document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'white';
                navLinks.style.padding = '2rem';
                navLinks.style.borderBottom = '1px solid #dfe6e9';
            }
        });
    }

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
        } else {
            header.style.padding = '1rem 0';
            header.style.boxShadow = 'none';
        }
    });

    // Language Switch Logic
    const translations = {
        es: {
            page_title: "QomL’aqtaq | Corpus Qom–Español y herramientas",
            nav_home: "Inicio",
            nav_description: "Descripción",
            nav_translator: "Traductor",
            nav_members: "Miembros",
            nav_acknowledgements: "Agradecimientos",
            hero_title: "QomL’aqtaq y QomSpeech:",
            hero_subtitle: "Un corpus Qom–Español y herramientas para PLN y tecnología del lenguaje",
            hero_btn_translator: "Probar el Traductor",
            hero_btn_dataset: "Descargar Dataset",
            hero_btn_code: "Código",
            hero_btn_paper: "Artículo",
            description_title: "Descripción",
            description_p1: "Presentamos dos recursos complementarios para la lengua Qom que cubren tanto texto como habla, apoyando la investigación en procesamiento de lenguaje natural para lenguas indígenas y de bajos recursos.",
            description_p2: "QomL’aqtaq es un corpus paralelo Qom–Español para traducción automática y otras tareas basadas en texto, mientras que QomSpeech es un corpus de habla con pares audio–texto en Qom para reconocimiento automático del habla (ASR) y tecnologías relacionadas.",
            description_p3: "Ambos conjuntos de datos van acompañados de herramientas y modelos para facilitar su uso.",
            translator_title: "Traductor en línea",
            translator_text: "Ofrecemos una demostración en línea para explorar la traducción Qom–Español utilizando nuestros modelos.",
            translator_btn: "Abrir Traductor",
            translator_note: "Nota: Este sistema está destinado a fines de investigación y puede producir errores.",
            members_title: "Miembros",
            acknowledgements_title: "Agradecimientos",
            acknowledgements_text1: "Este trabajo fue apoyado parcialmente por [Agencia de Financiamiento / Nombre del Proyecto / No. de Subvención].",
            acknowledgements_text2: "Los datasets … fueron creados con el apoyo de Lacuna Fund, Google.org, Instituto de Lingüística (...), ICC (CONICET-UBA).",
            footer_contact: "Contacto:",
            footer_affiliation: "Afiliación:",
            footer_affiliation_val: "…",
            footer_license: "Licencia:",
            footer_license_val: "…",
            footer_disclaimer: "Las opiniones expresadas en este documento no representan necesariamente las de Lacuna Fund, su Comité Directivo, sus financiadores o el Meridian Institute"
        },
        en: {
            page_title: "QomL’aqtaq | Qom–Spanish corpus and tools",
            nav_home: "Home",
            nav_description: "Description",
            nav_translator: "Translator",
            nav_members: "Members",
            nav_acknowledgements: "Acknowledgements",
            hero_title: "QomL’aqtaq and QomSpeech:",
            hero_subtitle: "A Qom–Spanish corpus and tools for NLP and language technology",
            hero_btn_translator: "Try the Translator",
            hero_btn_dataset: "Download Dataset",
            hero_btn_code: "Code",
            hero_btn_paper: "Paper",
            description_title: "Description",
            description_p1: "We release two complementary resources for the Qom language covering both text and speech, supporting research in natural language processing for low-resource and Indigenous languages.",
            description_p2: "QomL’aqtaq is a Qom–Spanish parallel corpus for machine translation and other text-based tasks, while QomSpeech is a speech corpus of audio–text pairs in Qom for automatic speech recognition (ASR) and related technologies.",
            description_p3: "Both datasets are accompanied by tools and models to facilitate their use.",
            translator_title: "Online translator",
            translator_text: "We provide an online demo to explore Qom–Spanish translation using our models.",
            translator_btn: "Open Translator",
            translator_note: "Note: This system is intended for research purposes and may produce errors.",
            members_title: "Members",
            acknowledgements_title: "Acknowledgements",
            acknowledgements_text1: "This work was partially supported by [Funding Agency / Project Name / Grant No.].",
            acknowledgements_text2: "The datasets … were created with support from Lacuna Fund, Google.org, Instituto de Lingüística (...), ICC (CONICET-UBA).",
            footer_contact: "Contact:",
            footer_affiliation: "Affiliation:",
            footer_affiliation_val: "…",
            footer_license: "License:",
            footer_license_val: "…",
            footer_disclaimer: "The views expressed herein do not necessarily represent those of Lacuna Fund, its Steering Committee, its funders, or Meridian Institute"
        }
    };

    const setLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'TITLE') {
                    document.title = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
        
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.id === `lang-${lang}`);
        });

        // Store preference
        localStorage.setItem('preferred-lang', lang);
    };

    document.getElementById('lang-es').addEventListener('click', () => setLanguage('es'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

    // Init language
    const savedLang = localStorage.getItem('preferred-lang') || 'es';
    setLanguage(savedLang);
});
