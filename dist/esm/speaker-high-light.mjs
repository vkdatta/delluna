export const name="speaker-high-light";
export const id="dl_e7a010ac631c5c6b5d3b";
export const url=new URL("../icons/speaker-high-light.svg?v=45d3114404f1867c4bcf9819f035c2fc67c7dbf4f2d574cb941e6ca6e5d525dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
