export const name="accessible-fill";
export const id="dl_3bd4187135c8b48e3253";
export const url=new URL("../icons/accessible-fill.svg?v=a01b20e9ab53965f7efa79bdd505366bc0b32ed459b1f5c5aa50e38ce661aef8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
