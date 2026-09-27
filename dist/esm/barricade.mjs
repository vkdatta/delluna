export const name="barricade";
export const id="dl_58216f5e216a44ca937e";
export const url=new URL("../icons/barricade.svg?v=ea7021188a5f57b22acf0418c4fa332421f98ad581957158679035edf148d2d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
