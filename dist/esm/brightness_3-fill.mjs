export const name="brightness_3-fill";
export const id="dl_3867c75d05c5082daf6b";
export const url=new URL("../icons/brightness_3-fill.svg?v=f1261762f8e2748aa983560ea28ecab96ee18f832d9c6c7a8543415a04dfbf58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
