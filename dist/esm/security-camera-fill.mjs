export const name="security-camera-fill";
export const id="dl_30beaf440b812dd63fad";
export const url=new URL("../icons/security-camera-fill.svg?v=cfd9f9742e79269803d52c7d3b7b30c8d64830abf70bd72f6040eb98b83a5945",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
