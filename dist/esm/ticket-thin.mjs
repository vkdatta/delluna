export const name="ticket-thin";
export const id="dl_5c6ba33054dbeb430f1f";
export const url=new URL("../icons/ticket-thin.svg?v=1e39c4ef79e634fa5dba5ad2cf59319f385885e00d2f86416d2d16a1d686e096",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
