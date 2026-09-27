export const name="finance-fill";
export const id="dl_1c97bdc1e2d2d1713ed1";
export const url=new URL("../icons/finance-fill.svg?v=bc9233ce5181c735d100693cda5ca2e399fe8d69d2af39bb1f56aa8c2e6dd245",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
