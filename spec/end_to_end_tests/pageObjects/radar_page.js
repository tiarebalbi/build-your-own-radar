class radar_page{

    constructor(){
        this.blip=".quadrant-group-second .blip-link";
        this.blip_selected=".quadrant-table.selected .blip-list-item";
        this.blip_description=".blip-item-description.expanded p";
    }

    click_the_blip_from_interactive_section = function() {
        cy.get(this.blip).click();
    }

    click_the_blip = function() {
        cy.get(this.blip_selected).click();
    }


    validate_blip_description = function() {
        expect(cy.get(this.blip_description).contains('test'));
    }
}

module.exports = new radar_page();