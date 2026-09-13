export const name="3k-fill";
export const id="dl_c719f4e297b0498fa096";
export const url=new URL("../icons/3/3k-fill.svg?v=b79c7bba45bc89770647b79f23d78167317e09c85f1e35a2380fde7bcea31c91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
