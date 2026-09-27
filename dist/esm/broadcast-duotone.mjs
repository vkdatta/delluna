export const name="broadcast-duotone";
export const id="dl_29abcb573c20480e8f01";
export const url=new URL("../icons/broadcast-duotone.svg?v=36dd896909ffe3afae4a53e033c1768a517d5eccbfe305d51039cce848da21ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
