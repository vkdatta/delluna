export const name="lock-laminated-open-bold";
export const id="dl_c914343530494202b571";
export const url=new URL("../icons/lock-laminated-open-bold.svg?v=716fa17d4ebdfd23c4eb585c6839b2105f26b76127bb5f38f6e827c8cc111261",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
