export const name="monochrome_photos-fill";
export const id="dl_2de03edb92c741c9a459";
export const url=new URL("../icons/M/monochrome_photos-fill.svg?v=4c17527dcea455bc96275a69170a9c0ee83cc2d42059f106ec5fee01075f149b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
