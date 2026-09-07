export const name="lucid_1-bed-double";
export const id="dl_a8301bda9b0647f39534";
export const url=new URL("../icons/lucid_1-bed-double.svg?v=a6cd8055a6b440f6124eee5e15686dcb92c1e9a424f678bc7aeb830f950b31e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
