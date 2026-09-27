export const name="history_off-fill";
export const id="dl_6ba3851116374a1c366c";
export const url=new URL("../icons/history_off-fill.svg?v=ddc62223b58d948a58dee76cfa26361277fff895846d005b8998876186e4a1a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
