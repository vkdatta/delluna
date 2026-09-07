export const name="football-duotone";
export const id="dl_81cbd212bacf4bc9a2ba";
export const url=new URL("../icons/football-duotone.svg?v=4682cdf378723b4fe6f8967d72ac76d2739fa1f69bcfbbb635f2765106974b77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
