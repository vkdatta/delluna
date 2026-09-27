export const name="briefcase_meal";
export const id="dl_16826dea9e0ab75e7209";
export const url=new URL("../icons/briefcase_meal.svg?v=570c72053ee5d2b799ef94827099318f6997f70d4d6624cd456d51a7588efba4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
