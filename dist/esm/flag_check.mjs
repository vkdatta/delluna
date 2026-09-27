export const name="flag_check";
export const id="dl_8e0a635f15afff04e25d";
export const url=new URL("../icons/flag_check.svg?v=1072d9d7b4aa173d25b00d10b6b4ebd9503e33c9291217551692e785b00a9497",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
