export const name="playlist_add_check-fill";
export const id="dl_ecc24a50f25c4c5f15b4";
export const url=new URL("../icons/playlist_add_check-fill.svg?v=f5ddf4520fb6916179a012a5bc5338cbc620658167f6dee1db8b0ec7e1f6215f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
