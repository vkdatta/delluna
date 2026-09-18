export const name="home_max_dots-fill";
export const id="dl_0815cf6433cf4d80bb1d";
export const url=new URL("../icons/H/home_max_dots-fill.svg?v=b082188040e90e24720d2297ceff176131ee7c2941e48b2f32104b0e96d986d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
