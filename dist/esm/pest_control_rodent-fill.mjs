export const name="pest_control_rodent-fill";
export const id="dl_c9999036a8f23e8d14ba";
export const url=new URL("../icons/pest_control_rodent-fill.svg?v=60d1360b0a29a1168d524ed46dfcc2537454ce5197314c0d3191bd02157243b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
