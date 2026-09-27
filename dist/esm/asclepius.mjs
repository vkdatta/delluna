export const name="asclepius";
export const id="dl_202ef54eab3440779d21";
export const url=new URL("../icons/asclepius.svg?v=0bbe3e6b3e603177db9f83a14354059c0b1f38b2f812cdf6259e749be1bb4427",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
