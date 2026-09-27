export const name="progress_activity-fill";
export const id="dl_9af931719cb11e070754";
export const url=new URL("../icons/progress_activity-fill.svg?v=ac6502e2c81dc9b3116bf0e1243cf4040beb4cd61d318ef1cc10e24fadd2ad83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
