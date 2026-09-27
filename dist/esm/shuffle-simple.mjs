export const name="shuffle-simple";
export const id="dl_aeb8c028fb08b5db3f4a";
export const url=new URL("../icons/shuffle-simple.svg?v=f131bd6a0cd192443a11d186d7d916672d6369a6cd003a6301000e3a8e6ce377",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
