export const name="music-notes-plus-duotone";
export const id="dl_cb1f7eb399a84932a33b";
export const url=new URL("../icons/music-notes-plus-duotone.svg?v=3760e472ac5a27f1b7f166ed61a1afc14c8a1ba3522fbdcc8af3480fee80c2c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
