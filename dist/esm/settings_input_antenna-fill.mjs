export const name="settings_input_antenna-fill";
export const id="dl_58cb7f6a6d632707b170";
export const url=new URL("../icons/settings_input_antenna-fill.svg?v=9a343d13784b3e7033aea96f5f82d2a98cb7b7c40e62740db12f8252c5270a72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
