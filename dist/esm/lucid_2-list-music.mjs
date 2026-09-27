export const name="lucid_2-list-music";
export const id="dl_aec2c3ac5fd64c5bbb3b";
export const url=new URL("../icons/lucid_2-list-music.svg?v=d52f0e25ac12cc5523ca7920d0b94f5f7fb9959ccecd9914354e26d55cf31c28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
