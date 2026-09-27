export const name="phone";
export const id="dl_d4a1fb7e612b4dc2ac1a";
export const url=new URL("../icons/phone.svg?v=64dc016993575ea342983f2120938e0f03787b18c8a1474c4d002aeb5af52c77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
