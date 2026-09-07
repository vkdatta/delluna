export const name="cash-register-light";
export const id="dl_308730f3b9314c7e8dfa";
export const url=new URL("../icons/cash-register-light.svg?v=3f204411f8e287d075bdb9af3137c9b0326ae10d884f54ca6d3a7e623da80e83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
