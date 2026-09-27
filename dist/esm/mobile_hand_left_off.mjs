export const name="mobile_hand_left_off";
export const id="dl_2ebf312e4c97b09b45b9";
export const url=new URL("../icons/mobile_hand_left_off.svg?v=3e28abe1052c09d61b463627c50f7d3376a69e54c9b9d3360e446a1e7a06c83d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
