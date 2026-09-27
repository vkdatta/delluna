export const name="photo_album-fill";
export const id="dl_2bb4574cb0b4c6c2903f";
export const url=new URL("../icons/photo_album-fill.svg?v=1643778ad6975ffdc5f87ee9cf12f4ae65b1c02cad35d5b23280f1b2bf91ef3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
