export const name="phone-outgoing";
export const id="dl_a296aca4591545d0a2c4";
export const url=new URL("../icons/phone-outgoing.svg?v=5fc7a87e15c8775583b3dc06203077e64353603caf08a5d4b3c5f7fecfa456f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
