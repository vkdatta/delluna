export const name="lock-key-open-light";
export const id="dl_7625689f15294105ab2e";
export const url=new URL("../icons/lock-key-open-light.svg?v=831da2c1854ae463f420b41bb61b81266dfcebd15a898d47f97c9a014d4344ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
