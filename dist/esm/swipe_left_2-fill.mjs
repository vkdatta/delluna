export const name="swipe_left_2-fill";
export const id="dl_4a24af1aef0968b9a1fe";
export const url=new URL("../icons/swipe_left_2-fill.svg?v=474db89f43f34f1f5edaed666feab5b2aa375b236e3e2d4ea0317c453d211f72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
