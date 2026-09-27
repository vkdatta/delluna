export const name="coin-vertical-fill";
export const id="dl_ac7f398fa54b4b66bfa7";
export const url=new URL("../icons/coin-vertical-fill.svg?v=4c58b8946fc6c69855765aa0e95b6b4a57b981620ecb7ebde11c6b78a879146a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
