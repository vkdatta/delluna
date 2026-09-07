export const name="device-tablet-speaker-light";
export const id="dl_0ebbb7c69ac14d8da3a3";
export const url=new URL("../icons/device-tablet-speaker-light.svg?v=d2e6bb6caf3023a72aa4381b238da42ee50afc7ce36840bd7f1c60a853a07886",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
