export const name="clarify-fill";
export const id="dl_ce92d71794b2a91404f6";
export const url=new URL("../icons/clarify-fill.svg?v=8a766ff400efdae96f7d7df7caead9d437ed4571e464e3362898889010cab4f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
