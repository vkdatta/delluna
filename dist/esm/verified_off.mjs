export const name="verified_off";
export const id="dl_20d0745f20504bddbcca";
export const url=new URL("../icons/V/verified_off.svg?v=acdea43b636bc8dedca106255ace0d90e2a0724c18bb929d395e91cdf1dfe128",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
