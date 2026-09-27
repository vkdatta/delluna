export const name="cloud_alert-fill";
export const id="dl_b47d254bf85693c2144c";
export const url=new URL("../icons/cloud_alert-fill.svg?v=017d2f2977645c40a1c3917601fd5b68ee9201338a2af2d587d626563fdd7a8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
