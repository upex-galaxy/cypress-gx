class dropDownPage {
	get = {
		//DropdownSelectValue
		containerSelectValue: () => cy.get('#withOptGroup'),
		titleGroup1SelectValue: () => cy.get('#react-select-2-group-0-heading'),
		option1Group1SelectValue: () => cy.get('#react-select-2-option-0-0'),
		option2Group1SelectValue: () => cy.get('#react-select-2-option-0-1'),
		titleGroup2SelectValue: () => cy.get('#react-select-2-group-1-heading'),
		option1Group2SelectValue: () => cy.get('#react-select-2-option-1-0'),
		option2Group2SelectValue: () => cy.get('#react-select-2-option-1-1'),
		rootOptionSelectValue: () => cy.get('#react-select-2-option-2'),
		anotherOptionSelectValue: () => cy.get('#react-select-2-option-3'),
		allOptionsSelectValue: () => cy.get('[id^=react-select-2-option]'),
		valueSelectedSelectValue: () => cy.get('[class^=" css-1uccc91-singleValue"]').eq(0),
		//DropdownSelectOne
		containerSelectOne: () => cy.get('#selectOne'),
		allOptionsSelectOne: () => cy.get('[id^="react-select-3-option"]'),
		valueSelectedSelectOne: () => cy.get('[class^=" css-1uccc91-singleValue"]').eq(0), //in case SelectValue show and option, use "eq(1)"
		messageNoMatchSelectOne: () => cy.get('[class^=" css-1gl4k7"]'),
		//DropdownOldStyleSelectMenu
		containerOldSelectMenu: () => cy.get('#oldSelectMenu'),
		optionsOldSelectMenu: () => cy.get('#oldSelectMenu>option'),
		//Multiselect drop down
		containerMultiselect: () => cy.get('p+[class=" css-2b097c-container"]'),
		inputMultiselect: () => cy.get('#react-select-4-input'),
	};

	clickSelectValue() {
		this.get.containerSelectValue().click();
	}
	clickSelectOne() {
		this.get.containerSelectOne().click();
	}
	typeSelectOne(text) {
		this.get.containerSelectOne().type(text);
	}
	clickOldSelectMenu() {
		this.get.containerOldSelectMenu().trigger('click');
	}
	typeMultiselect(text) {
		this.get.containerMultiselect().type(text);
	}
}
export const dropDown = new dropDownPage();
