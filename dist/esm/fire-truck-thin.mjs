export const name="fire-truck-thin";
export const id="dl_6362a67ba7374ac699ca";
export const url=new URL("../icons/fire-truck-thin.svg?v=054e1c58ecdd0388bf3bca4aecf612761f12c630a6c2e34b3479f1d5a3416584",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
