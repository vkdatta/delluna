export const name="lucid_3-monitor-down";
export const id="dl_72fe3ce38d764242937e";
export const url=new URL("../icons/lucid_3-monitor-down.svg?v=8b8feac3b2f13447998b50f3ae30a425b645beff931608b33510f1b090083702",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
