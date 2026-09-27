export const name="lock_open_right-fill";
export const id="dl_e45901713a21a565dffa";
export const url=new URL("../icons/lock_open_right-fill.svg?v=e412beedd3418549120824452038191b4669fbf3d9d5495eadd74123626092d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
