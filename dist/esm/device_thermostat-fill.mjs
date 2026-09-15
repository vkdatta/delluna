export const name="device_thermostat-fill";
export const id="dl_a3917461aa2943a9a55b";
export const url=new URL("../icons/D/device_thermostat-fill.svg?v=cd204e8342ce18261eb00a37d1b8dd5812d1e466cf582ed7b17eb3d1568f27db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
