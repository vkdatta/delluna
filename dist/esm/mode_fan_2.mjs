export const name="mode_fan_2";
export const id="dl_b32ffa8b0525485f899b";
export const url=new URL("../icons/mode_fan_2.svg?v=8f629115b423e0fa65d6313681f7e05e627932b0ba64d0b44f4aae1c88ac06e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
