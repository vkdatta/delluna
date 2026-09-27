export const name="deployed_code_alert-fill";
export const id="dl_7ec507bc94d2ebb05bf0";
export const url=new URL("../icons/deployed_code_alert-fill.svg?v=8b60deef9a7efbc3d09339d514c9c7fbe542beebd1ac201b4b3a910a3bc7a334",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
