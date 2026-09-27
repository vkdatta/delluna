export const name="security_key-fill";
export const id="dl_34c4b912279c4bf4b149";
export const url=new URL("../icons/security_key-fill.svg?v=f5f6eb7755a67f134062c54858176f5905190f8eba71789280ae8f21a012c5a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
