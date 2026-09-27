export const name="union-light";
export const id="dl_81760e4f3222a7afe8d1";
export const url=new URL("../icons/union-light.svg?v=a3ba3382b848de9d736bc3263a5316388bcd033a812bc6a0b80c65dbcf3a3428",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
