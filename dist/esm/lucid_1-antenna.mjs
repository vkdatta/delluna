export const name="lucid_1-antenna";
export const id="dl_8fad1ea3a28d43f4a605";
export const url=new URL("../icons/lucid_1-antenna.svg?v=c1894f282e3d1a167160cbee28d1c2236426b1a661471d73f57fc562ac95392c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
