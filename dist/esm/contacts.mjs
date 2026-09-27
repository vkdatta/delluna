export const name="contacts";
export const id="dl_a9b33f5019f071ae0394";
export const url=new URL("../icons/contacts.svg?v=c72ed30a89784e5a0f3caf07b55a13652710fe4d235cf2200451dbbe4b67ea5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
