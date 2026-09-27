export const name="dresser-bold";
export const id="dl_1c17e52e18c04108a729";
export const url=new URL("../icons/dresser-bold.svg?v=e3180be38ab53d39d9f1fb48e4829a596363a336de8dae99a933c4734d8347d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
