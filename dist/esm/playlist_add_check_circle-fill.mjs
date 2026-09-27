export const name="playlist_add_check_circle-fill";
export const id="dl_d8f20607ee8762b705eb";
export const url=new URL("../icons/playlist_add_check_circle-fill.svg?v=d9ec5705cfc69bbae7ba9a05987df40830daa7f2eb835130f4350ffc21ef7b10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
