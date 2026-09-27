export const name="policy_alert";
export const id="dl_eda9e3b2ca30c8be7eae";
export const url=new URL("../icons/policy_alert.svg?v=8b963d60ca4767c4573546ee24cb7b38b3943542cb562b881dad743b3dcf18be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
