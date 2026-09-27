export const name="matter-fill";
export const id="dl_30f03a1fc1735b3d1f3f";
export const url=new URL("../icons/matter-fill.svg?v=6d2fca2278c31691370efe4bb4dc227a5d66215e6fc3aeeb3bdf9f4089d7cf82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
