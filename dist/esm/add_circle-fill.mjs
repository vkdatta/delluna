export const name="add_circle-fill";
export const id="dl_5773c8ea655245dfbd51";
export const url=new URL("../icons/A/add_circle-fill.svg?v=866b624bed1adb1fcfc27287aff0a06d777030a10c589ac6f99ebb315a07a7ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
