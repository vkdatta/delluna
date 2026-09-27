export const name="cancel_schedule_send-fill";
export const id="dl_dd809536628f43a0e61e";
export const url=new URL("../icons/cancel_schedule_send-fill.svg?v=54947ed4be1097638940713e61a4f392726a47516ad8859fa85db7db2ffcfc2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
