export const name="mobile_hand_left_off-fill";
export const id="dl_60738e808ddd461422c3";
export const url=new URL("../icons/mobile_hand_left_off-fill.svg?v=a02b961b4400c420bf8aa801eea147eed4c46fc2c13289a33fc85fdf584bf5b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
