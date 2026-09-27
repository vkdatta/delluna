export const name="lucid_1-arrow-down-left";
export const id="dl_a309679dc48a4faea337";
export const url=new URL("../icons/lucid_1-arrow-down-left.svg?v=04ceeaabd0f88bd20859755e94769a2ade4b1d9efcd953d4c815b68b0ef30486",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
