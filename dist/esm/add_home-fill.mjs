export const name="add_home-fill";
export const id="dl_33bcf55c790c9064acae";
export const url=new URL("../icons/add_home-fill.svg?v=f03998ff7257fbe10317bac3d141f1251d9649de0088ce352184f027ed057ff1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
