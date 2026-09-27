export const name="point_scan-fill";
export const id="dl_fc62a8d97d93252696b4";
export const url=new URL("../icons/point_scan-fill.svg?v=b18fbac440d32a7bf1e8d7d59fb13aad4d806b50a629b807990f0f98cf793d2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
