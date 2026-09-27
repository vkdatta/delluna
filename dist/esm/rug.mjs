export const name="rug";
export const id="dl_97159992f7c04860acef";
export const url=new URL("../icons/rug.svg?v=b5712b3645ff72eeb7de880e2c6954d488dd587f9ff4af6411c34dbdb6ccd10f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
