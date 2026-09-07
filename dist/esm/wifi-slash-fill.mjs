export const name="wifi-slash-fill";
export const id="dl_0ffe4f1ee50044619a43";
export const url=new URL("../icons/W/wifi-slash-fill.svg?v=be4b6689164a166851945ec0b89629bbfe197293108629a66e1955ae0912d6c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
