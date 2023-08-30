export const styles = `
    :root {
        --custom-brand-color: #007bff; 
    }
    .widget__container * {
        box-sizing: border-box;
    }        
    .widget__container {
        min-width: fit-content;
        width: 240px;
        overflow: auto;
        right: -20px;
        bottom: 0px;
        position: absolute;
        transition: max-height .2s ease;
        font-family: Roboto, sans-serif;
        background: white;
        border: 1px solid #e8e8e8;
        border-radius: 10px 10px 0 0;
        box-sizing: border-box;
        box-shadow: -0.2px -0.3px 0.4px hsl(0deg 0% 63% / 0.36),
        -0.8px -0.9px 1.4px -0.8px hsl(0deg 0% 63% / 0.36),
        -2px -2.2px 3.3px -1.7px hsl(0deg 0% 63% / 0.36),
        -5px -5.2px 8.1px -2.5px hsl(0deg 0% 63% / 0.36);
    }
    .widget__header {
        backgrount: white;
        padding: 1.5rem 1.5rem 0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;  
    }
    .widget__header h3 {
        font-size: 20px;
        font-weight: 700;
        margin: 0;
        color: #444;
    }
    .widget__body {
      padding: 1rem 1.5rem 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .widget__button {
      padding: 1rem;
      display: flex;
      align-items: center;
      border: 2px solid var(--custom-brand-color);
      border-radius: 10px;
      background: white;
      font-weight: 600;
      text-decoration: none;
      color: #444;
      height: 40px;
      font-family: inherit;
      cursor: pointer;
      transition: transform 1s ease-in-out;
      text-align: left;
    }
    .widget__button:hover,
    .widget__button:active {
      color: white;
      background: var(--custom-brand-color);
    }
    .widget__button span {
        margin-left: 4px;
        hyphens: manual;
        font-size: 14px
    }
    .widget__button icon {
        display: inline-block;
        width: 24px;
        height: 24px;
    }
    .widget__text {
        display: inline-block;
    }

    @media screen and (max-width: 600px) {
        .widget__container {
            width: 100px;
        }
        .widget__header {
            padding: 0;
        }
        .widget__body {
            padding: 1rem;
        }
        .widget__text {
          display: none;
        }
      }
`;

export const CALENDAR_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-plus">
    <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/>
        <line x1="16" x2="16" y1="2" y2="6"/>
        <line x1="8" x2="8" y1="2" y2="6"/>
        <line x1="3" x2="21" y1="10" y2="10"/>
        <line x1="19" x2="19" y1="16" y2="22"/>
        <line x1="16" x2="22" y1="19" y2="19"/>
</svg>
`;

export const SURVEY_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-edit">
<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
<path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"/>
<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"/><path d="M4 13.5V6a2 2 0 0 1 2-2h2"/>
</svg>
`;
