export const name="lucid_3-spray-can";
export const id="dl_e1164d5753c34c539db7";
export const url=new URL("../icons/lucid_3-spray-can.svg?v=b1f94f47dcd8e6159aa0a2fbdd854a8cc3542ad15b300eac1729f3bdc726b4e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
