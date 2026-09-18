export const name="lock_open_circle";
export const id="dl_263e86d5fa394f9c9dd0";
export const url=new URL("../icons/lock_open_circle.svg?v=4e770371a69095f6e6c9a59861bcc37ee434ed16d4fd35da6e41f8186e55312f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
