export const name="image_aspect_ratio";
export const id="dl_156d2e9f5f53fed409fa";
export const url=new URL("../icons/image_aspect_ratio.svg?v=0b9b5c2e5610186fa0bb508ec8449c8f51785fc5e740747b326df0d85fef0fbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
