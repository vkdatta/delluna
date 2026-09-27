export const name="lucid_2-face-slightly-frowning";
export const id="dl_443ccb1c8d67491491e2";
export const url=new URL("../icons/lucid_2-face-slightly-frowning.svg?v=713572eb3085db6028e90942e944e1cf6fdfbb853b3681539ef0962381bf6923",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
