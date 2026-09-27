export const name="network_ping-fill";
export const id="dl_a38200fed6717a6a4dc2";
export const url=new URL("../icons/network_ping-fill.svg?v=d6aca94277aac98e989260a29fdeb85ac39d44e6d49cca50f5aff05a40fc3200",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
