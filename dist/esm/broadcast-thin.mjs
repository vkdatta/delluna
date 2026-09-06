export const name="broadcast-thin";
export const id="dl_e2faaf8dae2442bb88ee";
export const url=new URL("../icons/broadcast-thin.svg?v=c8ea94f6a1e98615214e6a74bd3409c85abfea01ef834b913a1a7777aae3a5b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
