export const name="volume";
export const id="dl_3f3d1200c14b479ab182";
export const url=new URL("../icons/volume.svg?v=cb43c54200daabc694bb1908b0ec092c35dc1946c056e2206f9f6f0c5dc084a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
