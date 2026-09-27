export const name="directions_car";
export const id="dl_59c9f595d4f692f2127f";
export const url=new URL("../icons/directions_car.svg?v=9536a9402f7c09d2980d6fb0523ad564d3952a696b66962a3d486c3972f99224",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
