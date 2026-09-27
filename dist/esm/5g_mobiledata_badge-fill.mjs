export const name="5g_mobiledata_badge-fill";
export const id="dl_8d3c4df46dd6b3e1e1fd";
export const url=new URL("../icons/5g_mobiledata_badge-fill.svg?v=376211ee55f0323a1f80098e66f063ac82c3caa867068bbeebe920644774da7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
