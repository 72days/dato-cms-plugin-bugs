import { RenderFieldExtensionCtx } from "datocms-plugin-sdk"
import { Canvas, Form } from "datocms-react-ui"

type LongTextFieldEditorProps = {
  ctx: RenderFieldExtensionCtx
  initialHeight?: number
}

export const LongTextFieldEditor = ({ ctx, initialHeight = 100 }: LongTextFieldEditorProps) => {
  // @ts-ignore
  const value = ctx.formValues[ctx.field.attributes.api_key]?.en ?? ctx.formValues[ctx.field.attributes.api_key] ?? ''
  return (
    <Canvas ctx={ctx}>
      <Form>
        <textarea
          style={{
            width: '100%',
            height: initialHeight,
            border: "1px solid var(--border-color)",
            padding: "var(--spacing-m) var(--spacing-l) var(--spacing-xl)",
            fontFamily: "var(--base-font-family)",
            fontSize: "var(--font-size-m)",
            boxSizing: "border-box",
            lineHeight: 1.5
          }}
          onChange={e => {
            ctx.setFieldValue(ctx.field.attributes.api_key, e.target.value)
          }}
          name={ctx.field.attributes.api_key}
          placeholder={ctx.placeholder}
          disabled={ctx.disabled}
          defaultValue={value}
        />
      </Form>
    </Canvas>
  )
}