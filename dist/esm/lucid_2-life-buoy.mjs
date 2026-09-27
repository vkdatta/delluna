export const name="lucid_2-life-buoy";
export const id="dl_0b106b6272184cfbbd72";
export const url=new URL("../icons/lucid_2-life-buoy.svg?v=08546068316d3504f21d6b9d2c9f79076c4f437cd1c25e5a1e2eba57f3cb4a33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
