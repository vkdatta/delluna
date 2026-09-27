export const name="lucid_3-monitor-check";
export const id="dl_137a265fdf0947c7b059";
export const url=new URL("../icons/lucid_3-monitor-check.svg?v=4d8f28bace8bcafbafd998cb4fa9de1bc262b7a7b825339dfa8a7f50a3ffaac6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
