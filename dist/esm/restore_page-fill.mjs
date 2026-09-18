export const name="restore_page-fill";
export const id="dl_2846abab0616482b90a9";
export const url=new URL("../icons/restore_page-fill.svg?v=8e1c3b32cfd210ca43d0cf6be83902437d724f9d418f8f567e7405d56ee6e064",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
