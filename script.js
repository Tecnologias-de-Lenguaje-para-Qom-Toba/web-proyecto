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
            page_title: "QomL’actaqa | Corpus Qom–Español y herramientas",
            nav_home: "Inicio",
            nav_description: "Descripción",
            nav_translator: "Traductor",
            nav_members: "Miembros",
            nav_acknowledgements: "Agradecimientos",
            hero_title: "QomL’actaqa y QomSpeech:",
            hero_subtitle: "Un corpus Qom–Español y herramientas para PLN y tecnología del lenguaje",
            hero_btn_translator: "Probar el Traductor",
            hero_btn_dataset: "Descargar Dataset",
            hero_btn_code: "Código",
            hero_btn_paper: "Artículo",
            description_title: "Descripción",
            description_p1: "Presentamos recursos y herramientas digitales creados para la lengua qom, diseñados para trabajar tanto con textos escritos como con grabaciones de voz. Estos recursos se complementan entre sí y buscan potenciar la presencia de las lenguas indígenas en el mundo digital, apoyando el desarrollo de tecnologías lingüísticas más inclusivas.",
            description_p2: "QomL’actaqa (texto). Es un corpus paralelo: una colección de textos que expresan el mismo contenido en dos idiomas: qom y español. Este recurso puede utilizarse para contribuir al desarrollo de sistemas de traducción automática y otras tecnologías del lenguaje, así como a la investigación lingüística, la enseñanza y la documentación de ambas lenguas. QomSpeech (Voz). Es un corpus de habla: una colección de grabaciones de voz en qom, donde cada audio tiene su correspondiente transcripción escrita. Este recurso puede utilizarse para desarrollar tecnologías capaces de reconocer el habla qom y transformarla en texto automáticamente (reconocimiento automático del habla), así como para la investigación lingüística y el estudio de distintos aspectos del lenguaje hablado. (Por ejemplo, este tipo de tecnología podría permitir, en el futuro, que una persona hable en qom y que sus palabras aparezcan escritas automáticamente en una computadora o un teléfono.) ",
            description_p3: "Ambos conjuntos de datos van acompañados de herramientas y modelos para facilitar su uso.",
            translator_title: "Traductor en línea",
            translator_text: "Ofrecemos una demostración en línea para explorar la traducción Qom–Español utilizando nuestros modelos.",
            translator_btn: "Abrir Traductor",
            translator_note: "Nota: Este sistema está destinado a fines de investigación y puede producir errores.",
            members_title: "Miembros",
            members_full_title: "Miembros plenos",
            members_collaborators_title: "Colaboradores",
            role_aleksei: "Construcción de corpus y de traductor",
            role_maca: "Construcción de corpus y evaluación de traductor",
            role_pablo: "Construcción de corpus e implementación de herramientas",
            role_victoria: "Asesoramiento antropológico",
            acknowledgements_title: "Agradecimientos",
            acknowledgements_text1: "Este trabajo fue apoyado por Lacuna Fund, Instituto de Lingüística (UBA), ICC (CONICET-UBA). Departamento de Computación (UBA)",
            acknowledgements_text2: "Los datasets fueron creados con el apoyo de Lacuna Fund, Google.org, Instituto de Lingüística (UBA), ICC (CONICET-UBA).",
            footer_contact: "Contacto:",
            footer_affiliation: "Afiliación:",
            footer_affiliation_val: "…",
            footer_license: "Licencia:",
            footer_license_val: "…",
            footer_disclaimer: "Las opiniones expresadas en este documento no representan necesariamente las de Lacuna Fund, su Comité Directivo, sus financiadores o el Meridian Institute"
        },
        en: {
            page_title: "QomL’actaqa | Qom–Spanish corpus and tools",
            nav_home: "Home",
            nav_description: "Description",
            nav_translator: "Translator",
            nav_members: "Members",
            nav_acknowledgements: "Acknowledgements",
            hero_title: "QomL’actaqa and QomSpeech:",
            hero_subtitle: "A Qom–Spanish corpus and tools for NLP and language technology",
            hero_btn_translator: "Try the Translator",
            hero_btn_dataset: "Download Dataset",
            hero_btn_code: "Code",
            hero_btn_paper: "Paper",
            description_title: "Description",
            description_p1: "We release two complementary resources for the Qom language covering both text and speech, supporting research in natural language processing for low-resource and Indigenous languages.",
            description_p2: "QomL’actaqa is a Qom–Spanish parallel corpus for machine translation and other text-based tasks, while QomSpeech is a speech corpus of audio–text pairs in Qom for automatic speech recognition (ASR) and related technologies.",
            description_p3: "Both datasets are accompanied by tools and models to facilitate their use.",
            translator_title: "Online translator",
            translator_text: "We provide an online demo to explore Qom–Spanish translation using our models.",
            translator_btn: "Open Translator",
            translator_note: "Note: This system is intended for research purposes and may produce errors.",
            members_title: "Members",
            members_full_title: "Full members",
            members_collaborators_title: "Collaborators",
            role_aleksei: "Corpus building and translator development",
            role_maca: "Corpus building and translator evaluation",
            role_pablo: "Corpus building and tools implementation",
            role_victoria: "Anthropological advising",
            acknowledgements_title: "Acknowledgements",
            acknowledgements_text1: "This work was supported by Lacuna Fund, Instituto de Lingüística (UBA), ICC (CONICET-UBA), Department of Computer Science (UBA).",
            acknowledgements_text2: "The datasets were created with support from Lacuna Fund, Google.org, Instituto de Lingüística (UBA), ICC (CONICET-UBA).",
            footer_contact: "Contact:",
            footer_affiliation: "Affiliation:",
            footer_affiliation_val: "…",
            footer_license: "License:",
            footer_license_val: "...",
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
