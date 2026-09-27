export const name="taxi_alert";
export const id="dl_dc7c3e2b8e5991d2c25d";
export const url=new URL("../icons/taxi_alert.svg?v=d771d5a540c78928c7658f03b6d62defd9fbedfba84497b95ae59f9c39ad9882",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
