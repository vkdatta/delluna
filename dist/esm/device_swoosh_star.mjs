export const name="device_swoosh_star";
export const id="dl_0721f9fee9848a661d47";
export const url=new URL("../icons/device_swoosh_star.svg?v=0d962aec235946e9746284b20aab7dc4bdf78a13d955d951d0a2a123eef340c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
