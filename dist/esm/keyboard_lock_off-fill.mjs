export const name="keyboard_lock_off-fill";
export const id="dl_9cbbfc6dd5221b53b64e";
export const url=new URL("../icons/keyboard_lock_off-fill.svg?v=b79f1e7013b7bd2b124c4ddb5bf08f64e0ff161632163748af3ced4a9b6022c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
