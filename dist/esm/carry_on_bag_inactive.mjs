export const name="carry_on_bag_inactive";
export const id="dl_a82e49a84d00b69e66de";
export const url=new URL("../icons/carry_on_bag_inactive.svg?v=dd4704bf0f6484660b44915522e36b577df5d41323bed665ce05d558dfe968c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
