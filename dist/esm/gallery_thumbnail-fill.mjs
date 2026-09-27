export const name="gallery_thumbnail-fill";
export const id="dl_439a864d04eddeeabad4";
export const url=new URL("../icons/gallery_thumbnail-fill.svg?v=771c7aeeda690f93dc75cae2726e6123bedb653e3a66dfdbb7e73251d49589fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
