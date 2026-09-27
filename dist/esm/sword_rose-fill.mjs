export const name="sword_rose-fill";
export const id="dl_96e87be997561fa06a7a";
export const url=new URL("../icons/sword_rose-fill.svg?v=30b9f7da02b8afe126ff42a29892dcfec09a560d25b650f8d07749fac2930512",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
