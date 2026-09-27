export const name="sports";
export const id="dl_0146c368871072317025";
export const url=new URL("../icons/sports.svg?v=c781fe4eda1b2d3af488a4dc821783147ab4a441a0c7d2bbe93af32b88301b2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
