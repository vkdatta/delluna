export const name="broadcast_on_personal";
export const id="dl_f433d2bec403ab12946c";
export const url=new URL("../icons/broadcast_on_personal.svg?v=e287f567bbc79e7e31f642f736ef0a9ad125876a265d28f6fe04a0e3a7ca4889",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
