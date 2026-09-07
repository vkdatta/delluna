export const name="sailboat-light";
export const id="dl_fe0d79925a384f8793f5";
export const url=new URL("../icons/S/sailboat-light.svg?v=5f582d3565c63298239c5088699d73ff6522f71ce075c0d3d8f62cb1b83acb20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
