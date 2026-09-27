export const name="motion_play-fill";
export const id="dl_c7c90ca112eb96a68a2a";
export const url=new URL("../icons/motion_play-fill.svg?v=5a3d03d8512ec6a5c5c670028c7813d009c8bdcc63fb78d7e0523dd2672a7b74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
