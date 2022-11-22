import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobslist";
// get browser language without the region code
const language = navigator.language.split(/[-_]/)[0];
//const language="en"

const messages = {
    'en': localeEnMessages,
    'es': localeEsMessages
  };

ReactDOM.render(
    <IntlProvider locale={language} messages= {messages[language]}>
            <JobsList language={language}/>
    </IntlProvider>, document.getElementById("root")
);