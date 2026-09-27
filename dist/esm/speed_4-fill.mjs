export const name="speed_4-fill";
export const id="dl_de0a73a7bd1b653eb11a";
export const url=new URL("../icons/speed_4-fill.svg?v=63085ed74f171343e7431550eba726b67f64685d42d1fbfbe588904052be410e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
