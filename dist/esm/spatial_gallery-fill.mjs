export const name="spatial_gallery-fill";
export const id="dl_cd155e719f434ede93ac";
export const url=new URL("../icons/S/spatial_gallery-fill.svg?v=3dde12529ce70848acce22aceff30234dcc0076b0cdf883638f60239c28db92d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
