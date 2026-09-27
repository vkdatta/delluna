export const name="lock_open_right";
export const id="dl_9bc187488e4dbc31e2fd";
export const url=new URL("../icons/lock_open_right.svg?v=2aae94f1cf3f1b623a7deeaacf34fc461b345b2bbf1de388bcee042ef59da314",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
