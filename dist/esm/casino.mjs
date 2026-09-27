export const name="casino";
export const id="dl_ba05375e1ead12cfc8de";
export const url=new URL("../icons/casino.svg?v=14db5c46131e26cf55ce738a5cfaee18d1db58686a2b492ae85e77743ebaf40b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
