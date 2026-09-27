export const name="swatches-thin";
export const id="dl_144364dce99e6f5c58ae";
export const url=new URL("../icons/swatches-thin.svg?v=b1cd357243a6bd3093ee0f43e5e478ba6bbfb4014268290e18dff957f8caa63c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
