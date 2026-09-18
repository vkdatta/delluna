export const name="move_up-fill";
export const id="dl_919ee5ef4bab434e9aa1";
export const url=new URL("../icons/M/move_up-fill.svg?v=be1e38d8706f1df12f980a290657c2cc5ac6c647fa88c6e3871e12ca487b6961",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
