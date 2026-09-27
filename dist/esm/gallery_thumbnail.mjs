export const name="gallery_thumbnail";
export const id="dl_024c012a1da071dd1ee7";
export const url=new URL("../icons/gallery_thumbnail.svg?v=2082a2dd2bf85819eb340445a6c745127d242abaf5f111681b3a2f92dddab4b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
