import { Field, FieldIntentCtx, RenderFieldExtensionCtx, connect } from 'datocms-plugin-sdk';

import { render } from './utils/render';
import ConfigScreen from './entrypoints/ConfigScreen';
import { FieldExtensionLinks } from './entrypoints/FieldExtensionLinks';

import 'datocms-react-ui/styles.css';
import { LongTextFieldEditor } from './entrypoints/LongTextFieldEditor';

connect({
  renderConfigScreen(ctx) {
    return render(<ConfigScreen ctx={ctx} />);
  },

  overrideFieldExtensions(field: Field, ctx: FieldIntentCtx) {
    if (field.id === "4862946") {
      return {
        editor: { 
          id: 'relatedArticlesAsLinks', 
          initialHeight: 150 
        },
      }
    }
    if (field.id === "3748856") {
      return {
        editor: { 
          id: 'longTextField', 
          initialHeight: 150 
        },
      }
    }
  },

  renderFieldExtension(fieldExtensionId: string, ctx: RenderFieldExtensionCtx) {
    switch (fieldExtensionId) {
      case 'relatedArticlesAsLinks':
        return render(
          <FieldExtensionLinks ctx={ctx} />
        )
      case 'longTextField':
        return render(
          <LongTextFieldEditor ctx={ctx} initialHeight={150} />
        )
    }
  },
});
