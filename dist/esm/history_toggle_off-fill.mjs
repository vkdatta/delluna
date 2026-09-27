export const name="history_toggle_off-fill";
export const id="dl_bb42334cca85e8754f36";
export const url=new URL("../icons/history_toggle_off-fill.svg?v=cd600a6c3ca11ad0a0aae15e97022c20c7d7bb2d0c3a1684b7ac77f01f8bc6f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
