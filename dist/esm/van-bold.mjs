export const name="van-bold";
export const id="dl_f1c572269676dedcf763";
export const url=new URL("../icons/van-bold.svg?v=90011a0101492ffa85d48341cba2e0ae3bcdcf557a0694ea167142837484504a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
