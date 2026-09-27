export const name="headset_off";
export const id="dl_7847e0fe951926b61d5e";
export const url=new URL("../icons/headset_off.svg?v=f2b7ef604a5e433e5512aef71a418c1f218b3971cea4551895ff5d045bba30a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
