export const name="device-mobile-camera-fill";
export const id="dl_92c610f89a2941a8a826";
export const url=new URL("../icons/device-mobile-camera-fill.svg?v=6cf21591baba94a67f2b3f2ba5ab69a28cdf719133cf98ece673b5562896e716",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
