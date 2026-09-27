export const name="calendar-plus-duotone";
export const id="dl_9bc72c66946747f7adf5";
export const url=new URL("../icons/calendar-plus-duotone.svg?v=bd3ba2a6dec03c9439535b00c85f09989a1e2da5bd490322200e219b33e10825",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
