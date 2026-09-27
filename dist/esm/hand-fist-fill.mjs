export const name="hand-fist-fill";
export const id="dl_2593ca2598a7470b8d1e";
export const url=new URL("../icons/hand-fist-fill.svg?v=33a457763bf6812a1c081fa56f3a158e23f96e506f1cb8680ec3a943acd0fec7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
