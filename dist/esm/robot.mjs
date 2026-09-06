export const name="robot";
export const id="dl_0bbca5a74eb74bea8276";
export const url=new URL("../icons/robot.svg?v=defac7635fe4235e3b6c8a1edabca345ac9dc2e8a2ec79ec82088845562a8128",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
