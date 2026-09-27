export const name="spatial_gallery";
export const id="dl_2c1018223cc33855015d";
export const url=new URL("../icons/spatial_gallery.svg?v=f79b33bf59d21bb1854bb2cd582cfcbd7115bd8a87d3c81c9b47ceacdcd31087",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
