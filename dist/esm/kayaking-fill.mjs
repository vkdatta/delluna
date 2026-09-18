export const name="kayaking-fill";
export const id="dl_eee31bea20274a7d8a05";
export const url=new URL("../icons/kayaking-fill.svg?v=be61f9a2df00dee7b2e7b66621fce9094a50ee0fb0890a60f6dba83bb52756a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
