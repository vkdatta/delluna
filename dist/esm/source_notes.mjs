export const name="source_notes";
export const id="dl_8e9f5d9c2fbe81ee37be";
export const url=new URL("../icons/source_notes.svg?v=96d0294a6e1322188a1991c2c4a40c01164bb094bcf99097dbd91abf51e38293",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
