export const name="file_png";
export const id="dl_2948975a6e9e24910152";
export const url=new URL("../icons/file_png.svg?v=6c9015043f7b85350f52061e911368aa7ff7c05ff85a2ea54eb460c4e0116908",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
