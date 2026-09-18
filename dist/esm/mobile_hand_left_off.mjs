export const name="mobile_hand_left_off";
export const id="dl_ec18cba69ce742a985a5";
export const url=new URL("../icons/mobile_hand_left_off.svg?v=2a5d207cd6b551cdba3e6d7c751d5bbdd43b177d4bf812fa4eb0aed0a0deb3d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
