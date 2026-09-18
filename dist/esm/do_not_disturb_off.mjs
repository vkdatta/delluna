export const name="do_not_disturb_off";
export const id="dl_8824a31f75e2456f9702";
export const url=new URL("../icons/do_not_disturb_off.svg?v=589ac9455524bcb4154627d4849ef20b72cdaecbdad9cfa1a23cbe3ba4083eb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
