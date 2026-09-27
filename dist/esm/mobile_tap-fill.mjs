export const name="mobile_tap-fill";
export const id="dl_9b2bc1c5789e91f42194";
export const url=new URL("../icons/mobile_tap-fill.svg?v=ed23346ff2eb6a38fd4702230ea8dcf76fb3393b77116a45aaba43f2bfdd07fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
