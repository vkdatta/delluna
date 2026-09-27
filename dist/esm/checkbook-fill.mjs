export const name="checkbook-fill";
export const id="dl_657e36fc9c169ada5843";
export const url=new URL("../icons/checkbook-fill.svg?v=8fb30f322d0e8aa8adf07ee2f63143322702e25ce8c5c7fc586e9999c35a8adc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
