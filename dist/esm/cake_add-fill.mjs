export const name="cake_add-fill";
export const id="dl_b80a107c85b221400d7f";
export const url=new URL("../icons/cake_add-fill.svg?v=1457a9656a17f5108fb1a32684e5707ed9dca96add62343b0fac40f5c749a7c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
