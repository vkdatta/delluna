export const name="trending-down";
export const id="dl_05a3fe073cd847e19cf9";
export const url=new URL("../icons/trending-down.svg?v=f810da8fcf3aba9aaf46436ec6ca781293a1046941dc9b9f1f732cde8d5b7b6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
