export const name="garage_door_open";
export const id="dl_b8c851718950f31e8486";
export const url=new URL("../icons/garage_door_open.svg?v=3b6ecd325d4676f5f5a3cdd7ea5c6302a66a48f5bcc8aa5db9fea8d91c0bd151",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
