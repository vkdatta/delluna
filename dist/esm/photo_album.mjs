export const name="photo_album";
export const id="dl_f65d4d6668384ae19d92";
export const url=new URL("../icons/P/photo_album.svg?v=336d2bb59a006974445e17357a2d95ca5199a37d044d4f2746c8c48b2e8b1c26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
