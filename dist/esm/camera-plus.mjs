export const name="camera-plus";
export const id="dl_a35291d0b8854d199e77";
export const url=new URL("../icons/camera-plus.svg?v=f5624e3bc69746356329144e06f9c10ab89c8e5b60f64631f3ca2dc0001a4311",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
