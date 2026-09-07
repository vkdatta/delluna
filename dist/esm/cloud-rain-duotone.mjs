export const name="cloud-rain-duotone";
export const id="dl_79b2e9a54171487bbe4a";
export const url=new URL("../icons/cloud-rain-duotone.svg?v=b96c8f795c1c4964cb5331fd2d89a2a4d3d6f3148de1541539c87f0f19a02f93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
