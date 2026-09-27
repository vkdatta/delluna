export const name="moving_beds-fill";
export const id="dl_9ea07c101d5dcc81ec2a";
export const url=new URL("../icons/moving_beds-fill.svg?v=03b00a8a193777c6f509de9ebf6b29286190c593c251c183ec3b4de87048643f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
