export const name="lucid_1-circle-chevron-right";
export const id="dl_059f0dabbec94b9fb9dd";
export const url=new URL("../icons/lucid_1-circle-chevron-right.svg?v=66de3e7ebd5060539f7d557f53dc8d54cd6089a3e22b667cc730aded250cded2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
