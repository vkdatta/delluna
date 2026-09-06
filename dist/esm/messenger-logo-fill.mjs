export const name="messenger-logo-fill";
export const id="dl_9d5c699d28bd4499a90b";
export const url=new URL("../icons/messenger-logo-fill.svg?v=16a92614f0139d8a520b48e67d4bb67f6dee66a749b094e2c05b78b1ee946803",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
