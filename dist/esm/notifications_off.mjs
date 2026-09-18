export const name="notifications_off";
export const id="dl_79f057d58b36401ab954";
export const url=new URL("../icons/N/notifications_off.svg?v=1a61f77db71fd3e7dec296bd3f534b0cd5ea2166c540c975834aa8c2b40b81dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
