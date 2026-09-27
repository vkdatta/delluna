export const name="assured_workload";
export const id="dl_429109e6539b5e8b4ece";
export const url=new URL("../icons/assured_workload.svg?v=4b3ae87a296ec50f7e6f3e82265210714ff270652f5c7a7c6d14c7de1427b67d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
