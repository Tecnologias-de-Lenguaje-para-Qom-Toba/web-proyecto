document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 900) {
                navLinks.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
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
            nav_datasets: "Datasets",
            nav_research: "Investigación",
            nav_translator: "Traductor",
            nav_members: "Miembros",
            nav_acknowledgements: "Agradecimientos",
            hero_title: "QomL’actaqa y QomSpeech:",
            hero_subtitle: "Un corpus Qom–Español y herramientas para PLN y tecnología del lenguaje",
            hero_btn_translator: "Probar el Traductor",
            hero_btn_dataset: "Explorar Datasets",
            hero_btn_code: "Código",
            hero_btn_paper: "Investigación",
            description_title: "Descripción",
            description_p1: "Presentamos recursos y herramientas digitales creados para la lengua qom, diseñados para trabajar tanto con textos escritos como con grabaciones de voz. Estos recursos se complementan entre sí y buscan potenciar la presencia de las lenguas indígenas en el mundo digital, apoyando el desarrollo de tecnologías lingüísticas más inclusivas.",
            description_p2: "QomL’actaqa (texto). Es un corpus paralelo: una colección de textos que expresan el mismo contenido en dos idiomas: qom y español. Este recurso puede utilizarse para contribuir al desarrollo de sistemas de traducción automática y otras tecnologías del lenguaje, así como a la investigación lingüística, la enseñanza y la documentación de ambas lenguas. QomSpeech (Voz). Es un corpus de habla: una colección de grabaciones de voz en qom, donde cada audio tiene su correspondiente transcripción escrita. Este recurso puede utilizarse para desarrollar tecnologías capaces de reconocer el habla qom y transformarla en texto automáticamente (reconocimiento automático del habla), así como para la investigación lingüística y el estudio de distintos aspectos del lenguaje hablado. (Por ejemplo, este tipo de tecnología podría permitir, en el futuro, que una persona hable en qom y que sus palabras aparezcan escritas automáticamente en una computadora o un teléfono.) ",
            description_p3: "Ambos conjuntos de datos van acompañados de herramientas y modelos para facilitar su uso.",
            datasets_title: "Datasets",
            datasets_intro: "El proyecto desarrolla dos recursos complementarios para trabajar con qom escrito y hablado.",
            dataset_text_type: "Recurso de texto",
            dataset_text_description: "Un corpus paralelo qom–español diseñado para apoyar la traducción automática, la investigación lingüística, la enseñanza y la documentación de la lengua.",
            dataset_speech_type: "Recurso de voz",
            dataset_speech_description: "Una colección de grabaciones de audio en qom acompañadas por transcripciones escritas para el reconocimiento del habla y la investigación del lenguaje hablado.",
            dataset_availability: "La información sobre acceso y licencias se publicará aquí.",
            research_title: "Investigación",
            research_intro: "Nuestro trabajo conecta la documentación lingüística con el procesamiento del lenguaje natural y las tecnologías del habla para el qom.",
            research_areas_title: "Áreas de investigación",
            research_area_mt: "Traducción automática y PLN multilingüe",
            research_area_asr: "Reconocimiento automático del habla y tecnologías del lenguaje hablado",
            research_area_documentation: "Documentación, enseñanza y tecnologías centradas en la comunidad",
            research_outputs_title: "Publicaciones y resultados",
            research_outputs_text: "Los artículos, informes técnicos, modelos y materiales relacionados se incorporarán aquí a medida que estén disponibles.",
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
            members_community_title: "Miembros de la comunidad y colaboraciones",
            members_community_text: "Esta sección reconocerá a miembros de la comunidad qom, hablantes, educadores y organizaciones que contribuyen a la creación, revisión y uso responsable de estos recursos. Los nombres y detalles se incorporarán con el consentimiento de cada colaborador.",
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
            nav_datasets: "Datasets",
            nav_research: "Research",
            nav_translator: "Translator",
            nav_members: "Members",
            nav_acknowledgements: "Acknowledgements",
            hero_title: "QomL’actaqa and QomSpeech:",
            hero_subtitle: "A Qom–Spanish corpus and tools for NLP and language technology",
            hero_btn_translator: "Try the Translator",
            hero_btn_dataset: "Explore Datasets",
            hero_btn_code: "Code",
            hero_btn_paper: "Research",
            description_title: "Description",
            description_p1: "We release two complementary resources for the Qom language covering both text and speech, supporting research in natural language processing for low-resource and Indigenous languages.",
            description_p2: "QomL’actaqa is a Qom–Spanish parallel corpus for machine translation and other text-based tasks, while QomSpeech is a speech corpus of audio–text pairs in Qom for automatic speech recognition (ASR) and related technologies.",
            description_p3: "Both datasets are accompanied by tools and models to facilitate their use.",
            datasets_title: "Datasets",
            datasets_intro: "The project develops two complementary resources for working with written and spoken Qom.",
            dataset_text_type: "Text resource",
            dataset_text_description: "A Qom–Spanish parallel corpus designed to support machine translation, linguistic research, teaching, and language documentation.",
            dataset_speech_type: "Speech resource",
            dataset_speech_description: "A collection of Qom audio recordings paired with written transcriptions for speech recognition and spoken-language research.",
            dataset_availability: "Access and licensing details will be published here.",
            research_title: "Research",
            research_intro: "Our work connects language documentation with natural language processing and speech technology for Qom.",
            research_areas_title: "Research areas",
            research_area_mt: "Machine translation and cross-lingual NLP",
            research_area_asr: "Automatic speech recognition and spoken-language technology",
            research_area_documentation: "Language documentation, teaching, and community-centered technologies",
            research_outputs_title: "Publications and outputs",
            research_outputs_text: "Articles, technical reports, models, and related materials will be listed here as they become available.",
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
            members_community_title: "Community members and collaborations",
            members_community_text: "This section will recognize Qom community members, speakers, educators, and organizations who contribute to the creation, review, and responsible use of these resources. Names and details will be added with each collaborator’s consent.",
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
        document.documentElement.lang = lang;

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
