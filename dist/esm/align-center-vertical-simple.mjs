export const name="align-center-vertical-simple";
export const id="dl_687173a409d4431393a6";
export const url=new URL("../icons/align-center-vertical-simple.svg?v=dbd83357fc99e8078c3a6ec8109e6da2d2279a96efe563f4e5830f17a1e2dc2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
