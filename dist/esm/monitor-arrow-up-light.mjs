export const name="monitor-arrow-up-light";
export const id="dl_bfb33fc6c8a7447dab5e";
export const url=new URL("../icons/monitor-arrow-up-light.svg?v=ef15cedfc28a021513cf50244a4ddc27ec7b1859e3ba911ca1ec9b820f011860",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
