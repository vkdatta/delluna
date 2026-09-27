export const name="handyman-fill";
export const id="dl_052cb2ee7b1d0eca4a2d";
export const url=new URL("../icons/handyman-fill.svg?v=0b7d961b63a4c07fac9df06d35642b726b19da0d201fe9e4f241cde89dc3ad33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
