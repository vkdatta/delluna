export const name="water_lux";
export const id="dl_b7753b7cc3d90bf3fa5d";
export const url=new URL("../icons/water_lux.svg?v=d9225674200c72d451cf5d59597c3156625407a43610c37d333568e4b0659147",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
