export const name="shield-check-light";
export const id="dl_9d1fe17542de4598a781";
export const url=new URL("../icons/S/shield-check-light.svg?v=3976993805ad3b2fc3f7f56fc8d64329142441788a20fcf9d647e9ceaf29a8d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
