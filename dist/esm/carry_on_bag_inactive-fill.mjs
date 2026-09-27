export const name="carry_on_bag_inactive-fill";
export const id="dl_01b3229c7eb6ef521b8d";
export const url=new URL("../icons/carry_on_bag_inactive-fill.svg?v=65f2f6d6dfcb53e6ce0e1921e2de2d6ec993bb0b92865db200ab924a54046d5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
