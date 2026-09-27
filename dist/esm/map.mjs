export const name="map";
export const id="dl_2860d8bd5511da03a710";
export const url=new URL("../icons/map.svg?v=96806f48250b9bdbb7cf005c58c357e45419cd1b97449e9cd30e01bbcefd4b83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
