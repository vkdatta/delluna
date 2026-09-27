export const name="arrows-out-cardinal-fill";
export const id="dl_0b6f2e8d5bd44ba39064";
export const url=new URL("../icons/arrows-out-cardinal-fill.svg?v=c2700c7854951e006d7e9c03e9e28a78fb1f800e426ae1832830d9e93bfc1232",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
