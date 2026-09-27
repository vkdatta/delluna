export const name="air-traffic-control-fill";
export const id="dl_33f95e6dd0174f4b8e57";
export const url=new URL("../icons/air-traffic-control-fill.svg?v=d2e6542d283c70a5ab8f3567aa2e82a99262b2dcaf106727a45eec8468b3a6f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
