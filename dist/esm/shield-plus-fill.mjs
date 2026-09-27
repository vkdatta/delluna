export const name="shield-plus-fill";
export const id="dl_4f931c1c81eccbf1f689";
export const url=new URL("../icons/shield-plus-fill.svg?v=b3a6861b658e763c7db77f0ecd53000f6168064de9c8699b06aa97209e85c117",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
