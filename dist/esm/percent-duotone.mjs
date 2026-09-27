export const name="percent-duotone";
export const id="dl_0f20930a5b454b82afd7";
export const url=new URL("../icons/percent-duotone.svg?v=3bbe651cf7b044bfb0544f2d79bf37d3011175e879068539e61e50670a849195",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
