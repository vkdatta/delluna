export const name="flight";
export const id="dl_6b3065caae2c83866403";
export const url=new URL("../icons/flight.svg?v=c9046393feb18b64e0867582479f1b9b6cb5af56152c9c44c2d3ebfe3c14c65a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
