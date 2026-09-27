export const name="hand_gesture-fill";
export const id="dl_008875d2b84424109582";
export const url=new URL("../icons/hand_gesture-fill.svg?v=4eca21e0d3d60514ad84cb9235185d068e3462e6f9d0bfed37173c038b8ca845",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
