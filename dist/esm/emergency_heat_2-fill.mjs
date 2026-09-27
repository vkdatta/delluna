export const name="emergency_heat_2-fill";
export const id="dl_6b19aa74ab5223ac2358";
export const url=new URL("../icons/emergency_heat_2-fill.svg?v=7d3fcb4485dbfcc95094c88cd2b493c7dd0adcb5e35c1da8ddcc90448e3ac519",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
