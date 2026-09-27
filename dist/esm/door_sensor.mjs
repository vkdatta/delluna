export const name="door_sensor";
export const id="dl_98d25d316a48c713fadc";
export const url=new URL("../icons/door_sensor.svg?v=6b39a234fe204dc94d484f11bca3892a5e8e01498cd001d3c85ca53d7655f929",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
