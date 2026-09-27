export const name="person_pin";
export const id="dl_1f73de871fbaf296fc82";
export const url=new URL("../icons/person_pin.svg?v=973729e97bc22e775f3e6afb5769639af995b4fb3f83bce2b19f4a1ccf34632e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
