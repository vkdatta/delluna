export const name="camera-slash";
export const id="dl_aae03afe97f04f668e79";
export const url=new URL("../icons/camera-slash.svg?v=e23ae4e2ad62c4897e5a0dd1d2ae38927000fdd23d5d331c934220d4262f5bc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
