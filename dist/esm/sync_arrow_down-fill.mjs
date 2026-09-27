export const name="sync_arrow_down-fill";
export const id="dl_ce939ae758e777d20ec7";
export const url=new URL("../icons/sync_arrow_down-fill.svg?v=896cc18b5058a1e48553791487ce0fb6aebda00172ddc227e61b694f9e30e336",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
