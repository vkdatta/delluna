export const name="sword-fill";
export const id="dl_8ead996082610cd20a15";
export const url=new URL("../icons/sword-fill.svg?v=10bffd56e24eefa70bef14c9584c6d375ed7f702dd4177f422768039063f1003",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
