export const name="vignette-bold";
export const id="dl_b7e58d5ec951cf10e8a8";
export const url=new URL("../icons/vignette-bold.svg?v=0afed764926297564f4d1d60337eb6c7d985cc55c2b3e566f247b26719660426",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
