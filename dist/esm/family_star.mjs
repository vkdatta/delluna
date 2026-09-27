export const name="family_star";
export const id="dl_830193fcec5254126488";
export const url=new URL("../icons/family_star.svg?v=eab277ec516c2eb887042fc3ffe0d2dde164d47cb17f5f5a822380241292a557",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
