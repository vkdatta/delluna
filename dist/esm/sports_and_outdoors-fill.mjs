export const name="sports_and_outdoors-fill";
export const id="dl_6699b020c0c3d8f65bbd";
export const url=new URL("../icons/sports_and_outdoors-fill.svg?v=ba896e43b736fcc133857ac322f580613587b803946d8667a6a32a0c15518eef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
