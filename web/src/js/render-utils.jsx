import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";

import {ScAppBar} from "./components/app-bar";
import {SideDrawer} from "./components/side-drawer";
import {Footer} from "./components/footer";
import {BaseForm} from "./components/base-form";
import {setupSideDrawerTransition} from "./side-drawer-transition";
import {MENU_CATEGORIES, APP_NAME} from "./constants";
import {setupCsrfRequests} from "./util";


function renderFormPage(legend) {
    let currentUsername = $("#current-user").data("name");
    let formInnerHtml = $("#form-inner-html").html();
    setupCsrfRequests();

    ReactDOM.render(
        <div id="react-root">
            <SideDrawer pageName={APP_NAME} menuCategories={MENU_CATEGORIES}/>
            <ScAppBar appName={APP_NAME} httpService={$} currentUsername={currentUsername}/>
            <div id="content-wrapper">
                <div className="mui--appbar-height"></div>
                <BaseForm formInnerHtml={formInnerHtml} legend={legend}/>
            </div>
            <Footer/>
        </div>,
        document.getElementById("form-root")
    );

    setupSideDrawerTransition();
}

export {renderFormPage};
