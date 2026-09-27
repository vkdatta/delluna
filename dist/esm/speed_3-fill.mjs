export const name="speed_3-fill";
export const id="dl_9d5ad93ea147cf4e86e7";
export const url=new URL("../icons/speed_3-fill.svg?v=d903e01fec7aff8c1b1d7e5a2e557290b52c83d79458c79a31409b5ba40b4d3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
