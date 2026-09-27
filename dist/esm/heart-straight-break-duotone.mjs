export const name="heart-straight-break-duotone";
export const id="dl_d81f23baa5c5452ab081";
export const url=new URL("../icons/heart-straight-break-duotone.svg?v=88e2eca03288d1e5f76b225269f8aacca10e241e7cf076b9a3dc8734fe6e29f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
