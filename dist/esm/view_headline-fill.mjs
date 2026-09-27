export const name="view_headline-fill";
export const id="dl_0def5695614f6cb7a90b";
export const url=new URL("../icons/view_headline-fill.svg?v=0e784221236689cb014b3d67438c10a1723f2fd70111f458e80c771f607f05cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
