export const name="work_history-fill";
export const id="dl_4923f4e58336dc0ef34c";
export const url=new URL("../icons/work_history-fill.svg?v=ff6ab5128c542730931e7f541ae04f0e7f232ae5969654fe56edf774d09eb3e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
