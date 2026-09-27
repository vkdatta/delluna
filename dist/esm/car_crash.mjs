export const name="car_crash";
export const id="dl_0da0b6adee2362ee1809";
export const url=new URL("../icons/car_crash.svg?v=e1e23c1ccaaff0957d75ed1679fb532b618d295ba5150b9609a06b1bed3efa4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
