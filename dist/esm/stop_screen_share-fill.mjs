export const name="stop_screen_share-fill";
export const id="dl_3897ec6cedc6466cb530";
export const url=new URL("../icons/stop_screen_share-fill.svg?v=8a41eb921f4148191a7ce8fac088f95fae3ce2e95e98d5a5e003cfad0eaa95e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
