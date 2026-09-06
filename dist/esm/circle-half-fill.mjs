export const name="circle-half-fill";
export const id="dl_facc00d979c449479104";
export const url=new URL("../icons/circle-half-fill.svg?v=839a468497f057836b9561a0e2204cbbb148e72297458373f926ce71683596a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
