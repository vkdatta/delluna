export const name="lucid_3-music-4";
export const id="dl_cac6e68b47fd47279b41";
export const url=new URL("../icons/lucid_3-music-4.svg?v=dfbe46396960d39e36f13fa622deea3b27945efed426bcbb8f98499850826007",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
