export const name="partner_heart";
export const id="dl_d5f7ebd14e8e42e44c36";
export const url=new URL("../icons/partner_heart.svg?v=db09eadd0e3291070aa5907563624372ddcd2d9e9c89d61d0d6b2abf6ec3dff8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
