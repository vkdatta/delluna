export const name="alarm_pause-fill";
export const id="dl_ce0a60305e7b3b5c72b5";
export const url=new URL("../icons/alarm_pause-fill.svg?v=d63a27ba6f94fe6580e9c4aa533f41c82f4922ca487b37f191cacce8a3f2ec4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
