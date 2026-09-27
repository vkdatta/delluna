export const name="1x_mobiledata_badge-fill";
export const id="dl_9c090dcd315f6baf2b7a";
export const url=new URL("../icons/1x_mobiledata_badge-fill.svg?v=03f6f6954b634bd27ccc1bee971504fd4eaa8032796a1e804f4d87ef11ff718b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
