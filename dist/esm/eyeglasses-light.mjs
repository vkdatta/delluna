export const name="eyeglasses-light";
export const id="dl_fe5522c9f38542baace2";
export const url=new URL("../icons/eyeglasses-light.svg?v=33a45f578f98c405533b1390f8f80b01eeaff708724c9ca4573b8f459148ee20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
