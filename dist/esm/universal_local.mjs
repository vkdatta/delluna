export const name="universal_local";
export const id="dl_898b780b633340ebae7a";
export const url=new URL("../icons/universal_local.svg?v=14f9be8e102508fc7443654322ab3171ccfe1cf1122a867068057ed7ab5e8272",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
