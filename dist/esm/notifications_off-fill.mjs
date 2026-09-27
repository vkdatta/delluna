export const name="notifications_off-fill";
export const id="dl_495db8a906e786fca5f0";
export const url=new URL("../icons/notifications_off-fill.svg?v=a8b3f851e10a6bc6619884390a76b354426b6cf639313d6a70f98e4d793da1b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
