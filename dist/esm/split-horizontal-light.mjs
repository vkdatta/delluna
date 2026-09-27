export const name="split-horizontal-light";
export const id="dl_6c4e056309f0ac203159";
export const url=new URL("../icons/split-horizontal-light.svg?v=6946bee381ca89554c1e2ec014825e796c66642c0edaa42b863d9e66c831765a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
