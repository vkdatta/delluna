export const name="photo_album";
export const id="dl_43c0e9735c15898bd8f0";
export const url=new URL("../icons/photo_album.svg?v=ceff8da13b2130d25b0dca70dbeaa0a63e2ab90bf2a32824035ce612a0d61f58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
