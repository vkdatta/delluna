export const name="gallery_thumbnail";
export const id="dl_f9638138228f78b39e2f";
export const url=new URL("../icons/gallery_thumbnail.svg?v=8f96be32fb3c6e24c9fd3e6afee1793a6c5838e64f613e9fb39912e8d0f43517",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
