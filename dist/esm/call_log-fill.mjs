export const name="call_log-fill";
export const id="dl_d4723a459d0c0c933054";
export const url=new URL("../icons/call_log-fill.svg?v=d57455f072d331b9fedce894f0072cb89181e1f0f91af7adca6a03374ef00da4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
