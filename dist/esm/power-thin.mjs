export const name="power-thin";
export const id="dl_aa521b10a0b44eb5b93c";
export const url=new URL("../icons/power-thin.svg?v=4eb3ca62e0d4f88f089422a6975507525909268e30cd0bcafda2b9c4c804c753",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
