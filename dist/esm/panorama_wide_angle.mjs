export const name="panorama_wide_angle";
export const id="dl_c5b9f740fc84b7461ce5";
export const url=new URL("../icons/panorama_wide_angle.svg?v=7db1b37273b01b706e730cd194abe66a94376c8d2bce27a41f82c7e48808e6b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
