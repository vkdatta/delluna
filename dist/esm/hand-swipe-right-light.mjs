export const name="hand-swipe-right-light";
export const id="dl_9f485025cc7d445d8e58";
export const url=new URL("../icons/hand-swipe-right-light.svg?v=485d357bd8d8aff2c17f3458959debe59a32a3e599f7e64527f878895d37ec70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
