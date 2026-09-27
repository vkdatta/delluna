export const name="steering_wheel_heat";
export const id="dl_4b420b34e9a1e1bf8b76";
export const url=new URL("../icons/steering_wheel_heat.svg?v=64fe9bfdc97691971d64e0d4e15c7985e147b7711f7685473492ea30e5d9c0fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
