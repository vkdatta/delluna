export const name="user-check-fill";
export const id="dl_444dc2182b0942095832";
export const url=new URL("../icons/user-check-fill.svg?v=c302ddb8867bd6439f169ee14723409c6bb8dfaea374aef86e38c1a74db137fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
