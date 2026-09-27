export const name="mobile_ticket";
export const id="dl_5affc3b57b63bc1ea1e7";
export const url=new URL("../icons/mobile_ticket.svg?v=ed61fbf8fbd7d94de10e8e541c71b02f6f737a34e0d11fa4f5bb37acbcc54104",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
