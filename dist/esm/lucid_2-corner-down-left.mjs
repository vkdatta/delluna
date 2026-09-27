export const name="lucid_2-corner-down-left";
export const id="dl_3a5d02a20a8847eb973b";
export const url=new URL("../icons/lucid_2-corner-down-left.svg?v=d7154625c2b5338b1911b8f8f6ee26ea27c11206d7ba52fcf556a398ec87ad5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
