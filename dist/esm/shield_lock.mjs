export const name="shield_lock";
export const id="dl_7555291b453ca50381db";
export const url=new URL("../icons/shield_lock.svg?v=92eb2c6ee2f1e25f213844bb15920057b66627ebab26246b9f5dc183befba094",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
