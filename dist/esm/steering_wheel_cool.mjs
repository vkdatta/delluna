export const name="steering_wheel_cool";
export const id="dl_0b74de365e3c6ecc2b27";
export const url=new URL("../icons/steering_wheel_cool.svg?v=2a38b0e0c4425041ed2636d67c3142f3b00c55f13ec2ac55c93500e0e9799930",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
