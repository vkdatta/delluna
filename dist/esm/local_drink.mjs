export const name="local_drink";
export const id="dl_dd34d473ccb768380769";
export const url=new URL("../icons/local_drink.svg?v=1ccab7f3f65640f0e3797597f651a3470f284f137bb18c7455ff1483c50efc27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
