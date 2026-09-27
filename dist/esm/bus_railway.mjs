export const name="bus_railway";
export const id="dl_0e1be7558ac546db5fec";
export const url=new URL("../icons/bus_railway.svg?v=4eb89968743235c2d055df78ca1cee9ba8030da3b1400e08c3b5e72383c860fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
