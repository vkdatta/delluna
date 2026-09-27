export const name="wand-sparkles";
export const id="dl_68e7b35f73034c1a9538";
export const url=new URL("../icons/wand-sparkles.svg?v=f09a65005ac26567730d9b2f0546c857f25345c855c490efcc9bead9aef4be7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
