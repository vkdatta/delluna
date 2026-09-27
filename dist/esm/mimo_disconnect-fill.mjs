export const name="mimo_disconnect-fill";
export const id="dl_9364bb16720b102ff892";
export const url=new URL("../icons/mimo_disconnect-fill.svg?v=e793026cb464ad176d30d28eb2ed292e64cda3b32455470b8f9b495e2787660e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
