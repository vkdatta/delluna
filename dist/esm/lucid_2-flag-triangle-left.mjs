export const name="lucid_2-flag-triangle-left";
export const id="dl_0753585f9a8546a8b12d";
export const url=new URL("../icons/lucid_2-flag-triangle-left.svg?v=0a23fd77479b7a44f908bc4980adba5421d6b47d83fe2a118dc592efd7881503",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
