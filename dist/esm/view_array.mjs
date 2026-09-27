export const name="view_array";
export const id="dl_784af95b0803b7979459";
export const url=new URL("../icons/view_array.svg?v=b2be8c6d6f9ad6345579ea958bb8748209ccc00a8ced9ec406410a778f2bab87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
