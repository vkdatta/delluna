export const name="fiber_smart_record-fill";
export const id="dl_f008875fcdaab5601913";
export const url=new URL("../icons/fiber_smart_record-fill.svg?v=95150c32f82cafd64b4bd9aec04be4b68b6bc2b611e3506b03e1c896fbf77ef9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
