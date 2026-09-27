export const name="contrast_square-fill";
export const id="dl_3bed5fc98b2d708a7534";
export const url=new URL("../icons/contrast_square-fill.svg?v=82cb66d9b9cceee3d659857a3400d56474731335fca58fb7e3795ea27bcc85f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
