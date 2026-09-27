export const name="gender-nonbinary-thin";
export const id="dl_ca4105901eae4206a6df";
export const url=new URL("../icons/gender-nonbinary-thin.svg?v=4989715ee88b272824f7317e12f9c8155d978c757e7e7f50278833b5b27991be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
