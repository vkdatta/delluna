export const name="local_mall-fill";
export const id="dl_649dd65f8a8a12759ee1";
export const url=new URL("../icons/local_mall-fill.svg?v=0a37717b87af1fa3647d518e990cfaa82b517215804a041e9273704401f78a89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
