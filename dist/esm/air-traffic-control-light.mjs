export const name="air-traffic-control-light";
export const id="dl_8b35f7aba080454f8235";
export const url=new URL("../icons/air-traffic-control-light.svg?v=226bcf168368dd51fd4ce28b50404961011aa5c44a1b4848b561a511faf1ab26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
