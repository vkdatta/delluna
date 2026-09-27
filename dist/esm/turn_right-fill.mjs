export const name="turn_right-fill";
export const id="dl_c31c4b0fc2f613dc3974";
export const url=new URL("../icons/turn_right-fill.svg?v=aacb84945afa8bb8a73ce866f071574fda305cc01ac33c3db95a3111fa57eb44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
