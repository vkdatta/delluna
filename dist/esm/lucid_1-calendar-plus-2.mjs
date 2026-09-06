export const name="lucid_1-calendar-plus-2";
export const id="dl_7d6375cb804f4b9bb76d";
export const url=new URL("../icons/lucid_1-calendar-plus-2.svg?v=a5ab4323eb79ee332221947e7e2ce3cc103afbc947fd891b29a0289e1bb9e5e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
