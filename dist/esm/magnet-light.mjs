export const name="magnet-light";
export const id="dl_dc731feb497941daa471";
export const url=new URL("../icons/magnet-light.svg?v=81a65c287c5b4b040db48a5fd7c81ddbb5ccf5820bfbb4e8e651bf4168d1b1b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
