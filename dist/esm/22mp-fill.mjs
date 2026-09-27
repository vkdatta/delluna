export const name="22mp-fill";
export const id="dl_01283567221792802478";
export const url=new URL("../icons/22mp-fill.svg?v=87a6484b8db39109903fb60aadd60964329526fb01a19effffd07144b33b6213",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
