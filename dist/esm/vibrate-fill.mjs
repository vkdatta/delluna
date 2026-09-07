export const name="vibrate-fill";
export const id="dl_7594bc620f3e4fffa54f";
export const url=new URL("../icons/V/vibrate-fill.svg?v=fb53c4cb7657e913abd9d097f9a564bc6ff2d4ccee577ca191360eb981be90ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
