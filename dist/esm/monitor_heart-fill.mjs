export const name="monitor_heart-fill";
export const id="dl_f62d6b5fe64972e288ae";
export const url=new URL("../icons/monitor_heart-fill.svg?v=02066a722a62c3a8dd5d2b7cc29c5313095850f8654ef9f1c511349be0b84c72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
