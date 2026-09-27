export const name="smiley-angry-fill";
export const id="dl_1b768ac9f306a5c153de";
export const url=new URL("../icons/smiley-angry-fill.svg?v=8e1fbde3c0249221979aabb4050c2be066f604d92f35c626b2d6c7735d15ef9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
