export const name="sip-fill";
export const id="dl_dbb73dbda1c5e4a0ace8";
export const url=new URL("../icons/sip-fill.svg?v=e17439a8f1671e0c8e949dde8e5825ee271e8356677fcc50ea196ec35cc93bf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
