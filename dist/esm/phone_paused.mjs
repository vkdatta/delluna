export const name="phone_paused";
export const id="dl_7469835a69233693b86a";
export const url=new URL("../icons/phone_paused.svg?v=cdf6ca85d2eac24fd98727bb05c7890359769378a88c8b98cba890cfda4f2a6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
