export const name="turn_sharp_right";
export const id="dl_fddcdfb6cc62064dff2f";
export const url=new URL("../icons/turn_sharp_right.svg?v=48020e3f3180441435aeb8ea11247e6f40a7455a1836e4abb604a6a82b140c19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
