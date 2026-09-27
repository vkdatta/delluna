export const name="lucid_1-clock-7";
export const id="dl_7f13a88493bf4bdba966";
export const url=new URL("../icons/lucid_1-clock-7.svg?v=bcbb4f322e430a23554d42f6bc4d540706e8e033d8b596d7cb00248fc9f13abd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
