export const name="monitor-duotone";
export const id="dl_2eb3b0821df7420d89c7";
export const url=new URL("../icons/monitor-duotone.svg?v=aa4dd44f834bcbbf2630473931d4945c8ef8bd46ef7359a27d7d98e91ea1cd6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
