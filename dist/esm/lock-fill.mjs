export const name="lock-fill";
export const id="dl_307fe0540c9d355aa939";
export const url=new URL("../icons/lock-fill.svg?v=5cfbc2bfda6066aa39e19253362d89ff1cbd8b78821090024d3292f12b57dcf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
