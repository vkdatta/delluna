export const name="data_check-fill";
export const id="dl_aa2370d555a94fb18f53";
export const url=new URL("../icons/D/data_check-fill.svg?v=379629b5334600d4b3d44398988da69f2589520fb1210f82c2a304c4523223ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
