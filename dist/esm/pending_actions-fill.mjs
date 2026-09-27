export const name="pending_actions-fill";
export const id="dl_3a112172d9e6285580ab";
export const url=new URL("../icons/pending_actions-fill.svg?v=8fdb54f42a8b88b90e38c2ed998c7968df3fa1693a5c6734d07cd102b4dcbf42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
