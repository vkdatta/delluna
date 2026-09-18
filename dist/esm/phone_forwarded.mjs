export const name="phone_forwarded";
export const id="dl_8691b9de060545ccad0e";
export const url=new URL("../icons/phone_forwarded.svg?v=6c82b1ffaa6c23e8081a834789cf3166f474858e2d6e20e825b8f3952166b970",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
