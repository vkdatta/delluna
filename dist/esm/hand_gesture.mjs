export const name="hand_gesture";
export const id="dl_6c147d6d29d33ef0813f";
export const url=new URL("../icons/hand_gesture.svg?v=e26514f01a51c6331e1c0e079c73e06f9e22815751b8cc2a35ae584c9b7d3455",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
