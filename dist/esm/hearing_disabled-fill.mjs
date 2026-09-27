export const name="hearing_disabled-fill";
export const id="dl_6946a4cb7a886138b752";
export const url=new URL("../icons/hearing_disabled-fill.svg?v=1c211a3d1d5e85a9fcc475c495ab9a386da294a381ea0060766b67efeff60d2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
