export const name="tag-chevron-duotone";
export const id="dl_73392a34a7db72ed802e";
export const url=new URL("../icons/tag-chevron-duotone.svg?v=1fcc05089c233ac1e193eef305277f23b23b110edd0bea57e20f679c95dee2a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
