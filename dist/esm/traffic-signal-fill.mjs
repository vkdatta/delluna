export const name="traffic-signal-fill";
export const id="dl_3eb99e36e93c9c4c0550";
export const url=new URL("../icons/traffic-signal-fill.svg?v=2c12683d5a3c93f1aa7fc30720312b70e4d098a64e24b76f76e8dc437d4bf103",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
