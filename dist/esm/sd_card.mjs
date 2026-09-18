export const name="sd_card";
export const id="dl_4bcf277c5c844508b316";
export const url=new URL("../icons/sd_card.svg?v=ed76c03d5fc37a19568a37f5f63b788c076da4c262132db8d794240f46d79a9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
