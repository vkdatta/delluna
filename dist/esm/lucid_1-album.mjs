export const name="lucid_1-album";
export const id="dl_fa97c99d8091423586ad";
export const url=new URL("../icons/lucid_1-album.svg?v=79c536fa41f5d8cf924bb427b5bb23d2436cbce07eda950267e6b27f454a2375",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
