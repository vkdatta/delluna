export const name="lucid_2-creative-commons";
export const id="dl_4f91c194ce21479d85ff";
export const url=new URL("../icons/lucid_2-creative-commons.svg?v=206a5e941cbe140d2f660ba550122fd5f8562bf2fd63d86ca1e74f43b114bf39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
