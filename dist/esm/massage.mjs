export const name="massage";
export const id="dl_efd1ebea36dd4fd0a4c8";
export const url=new URL("../icons/M/massage.svg?v=52067b3893ef8f75be8626bdca3d67e2d339394b654b1e65cb2a90541c84c6fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
