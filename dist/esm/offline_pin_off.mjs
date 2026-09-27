export const name="offline_pin_off";
export const id="dl_65fcff1cf5fbd446dd89";
export const url=new URL("../icons/offline_pin_off.svg?v=ee9f11a1a81ccab19d96e2119f60102457a206b2e19631c54bfdacf430c98ce6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
