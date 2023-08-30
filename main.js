import { styles, CALENDAR_ICON, SURVEY_ICON } from "./assets.js";

class AdmissionWidget {
  constructor(position = "bottom-right") {
    this.position = this.getWidgetPosition(position);
    this.initialize();
    this.injectStyles();
  }

  position = "";
  widgetContainer = null;

  getWidgetPosition(position) {
    const [vertical, horizontal] = position.split("-");
    return {
      [vertical]: "0px",
      [horizontal]: "30px",
    };
  }

  //Create Widget UI
  async initialize() {
    //Add Div to Host Body Element
    const container = document.createElement("div");
    container.style.position = "fixed";
    Object.keys(this.position).forEach(
      (key) => (container.style[key] = this.position[key])
    );
    document.body.appendChild(container);

    //Create widget container
    this.widgetContainer = document.createElement("div");
    this.widgetContainer.classList.add("widget__container");

    // Simulate API call - use Densilia blue brand color
    const getBrandColor = "#0053FF";

    // Set the custom brand color as a CSS variable
    document.documentElement.style.setProperty(
      "--custom-brand-color",
      getBrandColor
    );

    this.createWidgetContent();

    //Append content of Widget to container
    container.appendChild(this.widgetContainer);
  }

  async createWidgetContent() {
    //Get browser language
    const language = navigator.language;

    //Fetch widget text data and display it in UI depending on language
    try {
      const response = await fetch("./widgetConfig.json");
      const content = await response.json();

      if (language === "de-DE") {
        this.widgetContainer.innerHTML = `
        <header class="widget__header">
            <h3>${content.de.header}</h3>
        </header>  
        <div class="widget__body">
          <a class="widget__button" href="https://one.densilia.de/#/admission/demo">
            <span class="widget__icon">${CALENDAR_ICON}</span>
            <span class="widget__text">${content.de.appointmentText}</span>
          </a>
          <a class="widget__button" href="https://one.densilia.de/#/admission/demo">
            <span class="widget__icon">${SURVEY_ICON}</span>
            <span class="widget__text">${content.de.surveyText}</span>
          </a>
        </div>
    `;
      } else {
        this.widgetContainer.innerHTML = `
        <header class="widget__header">
            <h3 class="widget__text">${content.en.header}</h3>
        </header>  
        <div class="widget__body">
          <a class="widget__button" href="https://one.densilia.de/#/admission/demo?lang=eng">
            <span class="widget__icon">${CALENDAR_ICON}</span>
            <span class="widget__text">${content.en.appointmentText}</span>
          </a>
          <a class="widget__button" href="https://one.densilia.de/#/admission/demo?lang=eng">
            <span class="widget__icon">${SURVEY_ICON}</span>
            <span class="widget__text">${content.en.surveyText}</span>
          </a>
        </div>
    `;
      }
    } catch (error) {
      console.error("Error fetching widget configuration:", error);
    }
  }

  injectStyles() {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles.replace(/^\s+|\n/gm, "");
    document.head.appendChild(styleTag);
  }
}

function initializeWidget() {
  return new AdmissionWidget();
}

initializeWidget();
