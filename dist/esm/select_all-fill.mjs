export const name="select_all-fill";
export const id="dl_4adccb330316da25e659";
export const url=new URL("../icons/select_all-fill.svg?v=b130119d065dd4ec142d2daab8749a5497806716f3dba98d328c9cead1477ec9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
