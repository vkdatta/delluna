export const name="sports_baseball";
export const id="dl_e09137df4b0d072d539f";
export const url=new URL("../icons/sports_baseball.svg?v=a0d309dc9a42d992add151788effc1d460965e12f7194c783eb54f35ab70de19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
