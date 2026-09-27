export const name="spade-duotone";
export const id="dl_93a62281d8851680d71a";
export const url=new URL("../icons/spade-duotone.svg?v=c76a8e71b536770fef0682fe79e18d7d634b8a555572cf32ba95122ffbd1490e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
