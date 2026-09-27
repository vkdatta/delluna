export const name="selection-inverse-bold";
export const id="dl_cbb130afc591556949aa";
export const url=new URL("../icons/selection-inverse-bold.svg?v=25d8dc27ade0e635c475a0073ef692524ce325f0bf8d2eaf41a34d9edb50f6a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
