export const name="raw_off";
export const id="dl_4ede64149adbdbea2459";
export const url=new URL("../icons/material_symbols/raw_off.svg?v=3d5f25ce39e36214daac0e7169ccb2677f84ef83f6c7f25f8a7c616a11ada4e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
