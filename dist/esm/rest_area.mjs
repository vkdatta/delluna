export const name="rest_area";
export const id="dl_966c849c0fe5f01e9818";
export const url=new URL("../icons/rest_area.svg?v=9c703c670a636a52d826e391d2b9952532950db434eac9e5d2c07394cd666158",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
