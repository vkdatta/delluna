export const name="air-traffic-control-duotone";
export const id="dl_1035ec9af3a14eddbfa8";
export const url=new URL("../icons/air-traffic-control-duotone.svg?v=b06a25604f405f9ff334fc8b73960d84bb8a223a7a7c8754872638d3c71ee29a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
