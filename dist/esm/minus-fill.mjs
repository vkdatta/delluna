export const name="minus-fill";
export const id="dl_e31879da11d440889008";
export const url=new URL("../icons/minus-fill.svg?v=22630a4a41a0201349805a0c3a16b3801cc4c4eb4d6f9c9bb51feef87bb52deb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
