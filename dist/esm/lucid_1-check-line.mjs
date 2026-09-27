export const name="lucid_1-check-line";
export const id="dl_b3a5bbb5e4df464fa98b";
export const url=new URL("../icons/lucid_1-check-line.svg?v=0d38dd371dd69ca39747df57277d47fc43843e766c157c79cc3497ffbc48700c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
