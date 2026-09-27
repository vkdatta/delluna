export const name="rest_area-fill";
export const id="dl_1a4bd21087179b5f7436";
export const url=new URL("../icons/rest_area-fill.svg?v=9c2dcbed2362e6cb29bc752442bf2fe89e438946fa40ba802b3ac9c66c1df0e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
