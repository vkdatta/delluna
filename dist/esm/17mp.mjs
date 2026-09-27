export const name="17mp";
export const id="dl_f81e725d25949c4e98b0";
export const url=new URL("../icons/17mp.svg?v=892c139633c4f12bd5c9959e75a88033959e1201dd29ea08f27b5506502dc3df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
