export const name="clock-counter-clockwise";
export const id="dl_44f2ff7fd1ec47c2838a";
export const url=new URL("../icons/clock-counter-clockwise.svg?v=88d01e631782c0cb68b1fa3d2937ca7181ca2d536efdb85187bab658edcaa318",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
