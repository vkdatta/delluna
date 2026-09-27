export const name="weather_hail-fill";
export const id="dl_b1e4b32c1de994c5f0d4";
export const url=new URL("../icons/weather_hail-fill.svg?v=79a79eac243af10df5118cf07354c65abb5938e12592e189560d8b8443afbba0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
