export const name="draw_abstract";
export const id="dl_58fd60bc95793cefffaf";
export const url=new URL("../icons/draw_abstract.svg?v=315b2afa21a0dcf1c69c144ac103a4e54c11a87a944992e7b3bb733a09f0ab77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
