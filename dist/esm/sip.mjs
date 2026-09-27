export const name="sip";
export const id="dl_200f40f15a9ef74b0b9e";
export const url=new URL("../icons/sip.svg?v=8f29a2ab0d2415438b9143d797c1363e666f4085ae2949e63ecabe18dfcec135",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
