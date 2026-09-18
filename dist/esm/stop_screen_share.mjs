export const name="stop_screen_share";
export const id="dl_ac0176858941410da7d0";
export const url=new URL("../icons/S/stop_screen_share.svg?v=68ba6b0cf236cc4a81c36716950ee7af75260d5959b60ebef2a089e432ab6b7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
