export const name="thumb_down-fill";
export const id="dl_12e39f6ce5172e0b7239";
export const url=new URL("../icons/thumb_down-fill.svg?v=d1ebbf864e1ebc58ac2d234cf45ee6864b845d55427b126bf95b3c06c15a118e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
