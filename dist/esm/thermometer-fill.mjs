export const name="thermometer-fill";
export const id="dl_16bb25877d4f4acde9ed";
export const url=new URL("../icons/thermometer-fill.svg?v=973aae921808b0729ff01f5a266bf66ca72c4154e8f4a141549514f31e3958fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
