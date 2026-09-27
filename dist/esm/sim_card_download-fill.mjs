export const name="sim_card_download-fill";
export const id="dl_6b68caf2291fe2a21498";
export const url=new URL("../icons/sim_card_download-fill.svg?v=38cd8494415187aeea47d8001732de60683a1845c1f26f96cc72a24499c18722",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
