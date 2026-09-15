export const name="car_gear";
export const id="dl_e833d490b814436b8e51";
export const url=new URL("../icons/C/car_gear.svg?v=bd45953e40887d5eb1630d2b1c73085fc5f66b9193325cec1fcda4f5d1426b43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
