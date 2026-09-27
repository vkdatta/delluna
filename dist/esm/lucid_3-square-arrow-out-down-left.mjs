export const name="lucid_3-square-arrow-out-down-left";
export const id="dl_352cd52442f04bc1a4df";
export const url=new URL("../icons/lucid_3-square-arrow-out-down-left.svg?v=9784f1a0f595ea1cbfd47bf8acb98c0731a802c741ceccbd712e0c457a150d6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
