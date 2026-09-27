export const name="punch_clock";
export const id="dl_a7e204e85840e3aa9325";
export const url=new URL("../icons/punch_clock.svg?v=6d5a16215171462029f5cddac6561620d3eeec706ca398378151847ee99931b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
