export const name="thermometer";
export const id="dl_1224ee1286858441bd34";
export const url=new URL("../icons/thermometer.svg?v=e5eddeb74c14d866d12288d2395d3a04a14bff5dd321a249c5ee9bedfc1830bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
