export const name="pregnancy-fill";
export const id="dl_cb2a5e21f2548ad4c0a9";
export const url=new URL("../icons/pregnancy-fill.svg?v=f7375f746282994d833266ee4eb29722c1a32279486fca2ef5b338f6126e0ca4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
