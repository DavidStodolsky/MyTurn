Ext.define("testing.view.CreateGroup", {
    extend: 'Ext.form.Panel',
    xtype: 'createGroupView',
    requires: ['Ext.Button', 'Ext.field.Text'],
    config: {
        items: [
        {
            xtype: 'textfield',
            name: 'name',
            label: 'Name',
            id: 'createGroupTextfield'
        },
        {
            xtype: 'textfield',
            name: 'discussionLength',
            label: 'Discussion length (minutes)'
        },
        {
            xtype: 'textfield',
            name: 'turnLength',
            label: 'Turn length (seconds)'
        },
        {
            xtype: 'button',
            action: 'submitNewGroup',
            text: 'Submit',
            docked: 'bottom'
        }
       ]
    }
});