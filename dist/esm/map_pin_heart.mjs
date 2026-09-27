export const name="map_pin_heart";
export const id="dl_5aa7fa8e8a096d73a741";
export const url=new URL("../icons/map_pin_heart.svg?v=c5df2370fc2fa7a020ab7b5fe58a1f98ab2458f75e849681352008dc6ed88ba1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
