export const name="lucid_3-radio-tower";
export const id="dl_523184d24fa447ab8fc3";
export const url=new URL("../icons/lucid_3-radio-tower.svg?v=5805e01aa2381faf9800278878832bb0e079b8494efb17495e93ae3b2ef05ed7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
