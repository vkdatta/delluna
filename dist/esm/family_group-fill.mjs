export const name="family_group-fill";
export const id="dl_af83f08412814826a88d";
export const url=new URL("../icons/F/family_group-fill.svg?v=7cdce43d823695e7c985c4ab5ec467f2280f172466f34854ac7afdec3426db78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
