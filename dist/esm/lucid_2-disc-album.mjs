export const name="lucid_2-disc-album";
export const id="dl_28c89dd81ac34fb3aaf1";
export const url=new URL("../icons/lucid_2-disc-album.svg?v=a8be1b75b6591e91776aecf08f130af37f32cdd6f4278960f34074eb82c337f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
