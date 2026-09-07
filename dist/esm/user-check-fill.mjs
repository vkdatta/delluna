export const name="user-check-fill";
export const id="dl_fb6158b1967940e99fd5";
export const url=new URL("../icons/U/user-check-fill.svg?v=c302ddb8867bd6439f169ee14723409c6bb8dfaea374aef86e38c1a74db137fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
