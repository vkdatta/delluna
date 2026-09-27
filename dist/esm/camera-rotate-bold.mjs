export const name="camera-rotate-bold";
export const id="dl_9e29b35abec742e8a16b";
export const url=new URL("../icons/camera-rotate-bold.svg?v=10154af2269bf047f0001db79a558a376d2b7d12a277ab4abd3cb657860363bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
