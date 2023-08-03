# Bugs 

## Field Extensions for modular content 

We have a modular content field (Related Articles), on our Article model.

Whilst it is possible to create field extensions to change the UI of certain fields (see the Title field is using a LongText override), we can't seem to hook into the modular content field to override the UI.

Our use case is to make the field work similar to a Multiple Links field which has a better UI for the content creators, in order to avoid a painful data migration.
