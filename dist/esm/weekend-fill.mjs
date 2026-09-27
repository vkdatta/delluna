export const name="weekend-fill";
export const id="dl_3c0ef04fe9761d14ff8e";
export const url=new URL("../icons/weekend-fill.svg?v=4491efdf4c8a448e93bdb0944619163d373aa843229bf5c79e535ca68dfab8a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
