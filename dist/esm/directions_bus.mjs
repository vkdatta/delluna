export const name="directions_bus";
export const id="dl_c07d8089c05cefb4f36f";
export const url=new URL("../icons/directions_bus.svg?v=f554ffa6872206d4d7987335bfe404f186f410023edd8a04e7f68e33ac008090",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
