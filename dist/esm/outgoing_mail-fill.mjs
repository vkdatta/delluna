export const name="outgoing_mail-fill";
export const id="dl_483491d2949a46c29499";
export const url=new URL("../icons/O/outgoing_mail-fill.svg?v=c1af23d00bf533185cc0cd4db8cada94c1754ac8e0e239e83d2618d041898b0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
