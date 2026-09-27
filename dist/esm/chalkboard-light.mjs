export const name="chalkboard-light";
export const id="dl_07e10d6d1cfd4e31a74b";
export const url=new URL("../icons/chalkboard-light.svg?v=4358c359ad179c5cd86465173e1bf3171af95f605c6563c9dd7d0bbeb01d75f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
