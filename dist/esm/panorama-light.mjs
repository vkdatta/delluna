export const name="panorama-light";
export const id="dl_026b8d7d8ce6409c9b0c";
export const url=new URL("../icons/panorama-light.svg?v=1a62693e5b76cd6eee2832bfb16df1c98f2d5aaaa29d0205c8e8b6e5ad604108",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
