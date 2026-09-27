export const name="cardholder-thin";
export const id="dl_9ae136b86ee54572aa6a";
export const url=new URL("../icons/cardholder-thin.svg?v=3c3ffa5add19d4533c41f7c3f46339381d4bd086d52766848041cdfb2e46298d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
