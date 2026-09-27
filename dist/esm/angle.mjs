export const name="angle";
export const id="dl_924612994f664ee09055";
export const url=new URL("../icons/angle.svg?v=bcdded1bff48dd2cff8a4f2166199330075f84218f49d750d25c374930274710",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
