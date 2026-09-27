export const name="lucid_1-clock-4";
export const id="dl_f90b8976ca1540b8bf3f";
export const url=new URL("../icons/lucid_1-clock-4.svg?v=3325feb7d807a6327a71ae8cb4eaed0a35b29f7d9f084cbff89f7c3a326bf76c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
