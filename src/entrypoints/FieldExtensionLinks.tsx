import { RenderFieldExtensionCtx } from "datocms-plugin-sdk"
import { Canvas } from "datocms-react-ui"

export const FieldExtensionLinks = ({ctx}: {ctx: RenderFieldExtensionCtx}) => {
  return (
    <Canvas ctx={ctx}>
      <div>
        <p>Field extension working!</p>
      </div>
    </Canvas>
  )
}