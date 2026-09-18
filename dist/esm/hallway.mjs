export const name="hallway";
export const id="dl_6bfaff7a4b854d698aa5";
export const url=new URL("../icons/hallway.svg?v=19923f167d52594437f223fb17191425f407c88f54d8ace26f851f16f16fa14e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
