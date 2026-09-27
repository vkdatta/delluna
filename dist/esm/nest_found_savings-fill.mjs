export const name="nest_found_savings-fill";
export const id="dl_8070eb0e166c5974e2cc";
export const url=new URL("../icons/nest_found_savings-fill.svg?v=ba9d262f16f96aa830770a2858c6a456bc46b4a71faa1d2467390342ebd2064d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
