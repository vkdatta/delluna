export const name="phone_forwarded";
export const id="dl_259ad1ecd500d55611ff";
export const url=new URL("../icons/phone_forwarded.svg?v=33559608416f4a9d6f21c8ed84dd513d3a66869d34fcb741e8a8a5d2a260dc8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
