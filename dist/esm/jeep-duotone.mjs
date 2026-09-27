export const name="jeep-duotone";
export const id="dl_f1e0a1d317b8402f9693";
export const url=new URL("../icons/jeep-duotone.svg?v=66c42293d874f89d6bcb3aebe5784dd21ec500626599df6abb3019c8df69c942",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
