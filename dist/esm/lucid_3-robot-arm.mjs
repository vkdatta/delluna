export const name="lucid_3-robot-arm";
export const id="dl_415448ee1bc34db78d1b";
export const url=new URL("../icons/lucid_3-robot-arm.svg?v=dd0553987ccb1decb6551085c91d064176e9f1ce34785895214bcd4ed6d4950a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
