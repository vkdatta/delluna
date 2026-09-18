export const name="spatial_gallery";
export const id="dl_a0ade8fb82294c16bf7e";
export const url=new URL("../icons/S/spatial_gallery.svg?v=b14af99fab5bec2ad2852ecab6421fc1984e1df23fe40269c65fb54d28d6de76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
