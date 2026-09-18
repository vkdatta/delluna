export const name="mobile_camera";
export const id="dl_697e70316d3f44249cce";
export const url=new URL("../icons/mobile_camera.svg?v=b5fd8fe543ff87998ae44d3384d990758d5c4bf9616dcc6c68ed99285bca1fdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
