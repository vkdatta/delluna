export const name="ev_shadow_add";
export const id="dl_d746306f2c73990de201";
export const url=new URL("../icons/ev_shadow_add.svg?v=7dd1312e87af80dad25c2c5d00ca8084609626ed262d043152637ed2905e26cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
