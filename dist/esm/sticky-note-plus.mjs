export const name="sticky-note-plus";
export const id="dl_310c75e70665425088c7";
export const url=new URL("../icons/sticky-note-plus.svg?v=ca4318560916c269d740fe56548d63a06c63222f4826861cbc28af95b3287f16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
