export const name="transit_ticket";
export const id="dl_55518e5cf0744b888e61";
export const url=new URL("../icons/T/transit_ticket.svg?v=bf728f3bbf228dff65a2bcf858f527c9a4eb85d36e9b44b61ca3e1a9314e9214",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
