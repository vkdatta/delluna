export const name="park-light";
export const id="dl_d7375ba0e2f6450cb4c9";
export const url=new URL("../icons/park-light.svg?v=b0ef120b000c5e8dc8435f832c77122b0e7184fee53fa493af616f049f66ba72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
