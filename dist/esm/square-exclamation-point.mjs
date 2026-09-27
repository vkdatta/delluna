export const name="square-exclamation-point";
export const id="dl_0f4b9151313d4c60a80d";
export const url=new URL("../icons/square-exclamation-point.svg?v=376be1074fc997404d2c8667dc19ad76a9d686f7670239958265da7c1277c544",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
