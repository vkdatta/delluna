export const name="crop_7_5-fill";
export const id="dl_f6194192f068b0a7b4ff";
export const url=new URL("../icons/crop_7_5-fill.svg?v=ffd8716c6b5c449a810446f972e57f5e4e4c72b7b6e4bcc365a9ae69b712eeaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
