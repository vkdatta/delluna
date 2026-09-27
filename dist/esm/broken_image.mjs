export const name="broken_image";
export const id="dl_a4c5201b2c4d42353079";
export const url=new URL("../icons/broken_image.svg?v=ac45cbcc269793100681cce9a3a4385db0aecd56286c0fb9c9d914df86cb6e32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
