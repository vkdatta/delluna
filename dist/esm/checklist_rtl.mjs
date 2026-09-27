export const name="checklist_rtl";
export const id="dl_3c4f4b4af5d00a8267f5";
export const url=new URL("../icons/checklist_rtl.svg?v=80cafacf485e1da05baab7811ea796488930513656edc7d857bd80faa0303fbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
