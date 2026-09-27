export const name="lock_open_circle";
export const id="dl_c4dcc1c48c884bb00aa1";
export const url=new URL("../icons/lock_open_circle.svg?v=4e770371a69095f6e6c9a59861bcc37ee434ed16d4fd35da6e41f8186e55312f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
