export const name="view_in_ar";
export const id="dl_79e7f503ce7c4e0b48ed";
export const url=new URL("../icons/view_in_ar.svg?v=3120e1d0943cc995f1f40397fe9733a63c22efc17795bf1847ca40d19c01af09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
