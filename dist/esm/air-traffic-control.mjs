export const name="air-traffic-control";
export const id="dl_35a8bbcf905240069c1b";
export const url=new URL("../icons/air-traffic-control.svg?v=8cfab2849f6d3b914b3d7012a093e67f28cf00e1a21a4ddae90608b016fe14e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
