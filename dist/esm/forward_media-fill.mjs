export const name="forward_media-fill";
export const id="dl_6ac9285efafa3fc4bfc7";
export const url=new URL("../icons/forward_media-fill.svg?v=e299746d9eb3147821e4c9d5ada583b40b0e8c85d2bb66a3fe78cccdb3fb6ad7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
