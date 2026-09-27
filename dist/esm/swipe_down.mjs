export const name="swipe_down";
export const id="dl_bcda587d5479aab7dca0";
export const url=new URL("../icons/swipe_down.svg?v=0e97190e9b98d1dc619428ecaf4eb41277c1483149dfc60ea953e2a58dd522ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
