export const name="live_tv";
export const id="dl_ed7b659e2b03873b34b7";
export const url=new URL("../icons/live_tv.svg?v=31c3f9fd434f75b0e911f7ed369f34d7d03e04904d9e8accd19be74bde5d790b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
