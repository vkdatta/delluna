export const name="sell-fill";
export const id="dl_406356473695427b88d0";
export const url=new URL("../icons/sell-fill.svg?v=5c49828ea4b746fc5042da08178fe54a5d32c4aea8d6d6eb829b4574b4e31b98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
