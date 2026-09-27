export const name="smiley-wink-bold";
export const id="dl_fb70ed519b71220de8fe";
export const url=new URL("../icons/smiley-wink-bold.svg?v=82b2a8a5dddf4db218140ee51c653841d677e8c1708988a3157f74af303ef55a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
