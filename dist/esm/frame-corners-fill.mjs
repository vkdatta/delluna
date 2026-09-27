export const name="frame-corners-fill";
export const id="dl_c724beb6edb5455484e1";
export const url=new URL("../icons/frame-corners-fill.svg?v=a805b317c3ca5630a81e4421a28d9b2a1484cd690f15a0e4d4a72b52c323b2e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
