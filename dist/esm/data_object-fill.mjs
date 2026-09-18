export const name="data_object-fill";
export const id="dl_e7fa2d29ab8c44df8469";
export const url=new URL("../icons/data_object-fill.svg?v=614a159923630937c01b85e50ed0a98b8cd434edb0623b24aa03715466f0e7af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
