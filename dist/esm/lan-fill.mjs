export const name="lan-fill";
export const id="dl_7b0268fdc7343296d3f9";
export const url=new URL("../icons/lan-fill.svg?v=305bd07b867c8d10cadfb67862de5d31f0e43cd5b7426c914cd9459be1c6060e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
