export const name="wind_power";
export const id="dl_a686baaed7664ab581fd";
export const url=new URL("../icons/wind_power.svg?v=6ecbc67aed1bd7cb9b667196468b5038098aa9e5535dd3ae456a44c6c84c658a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
