export const name="horizontal_align_right-fill";
export const id="dl_51a14e01dca322763b12";
export const url=new URL("../icons/horizontal_align_right-fill.svg?v=e7bdbb10326d297dabca3a68130f0a8449d25611751a4a546eddf56fea7e01dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
