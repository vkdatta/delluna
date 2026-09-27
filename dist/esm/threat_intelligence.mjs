export const name="threat_intelligence";
export const id="dl_c6629fd3db4f4a04bad3";
export const url=new URL("../icons/threat_intelligence.svg?v=5adbe64851f6274dce0b7d5f0366522a855257094c0554fb04dfee13c7a9ce77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
