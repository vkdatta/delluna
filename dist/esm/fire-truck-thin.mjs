export const name="fire-truck-thin";
export const id="dl_6362a67ba7374ac699ca";
export const url=new URL("../icons/fire-truck-thin.svg?v=70f1587a30e1eb9e1d1a94f368887f27c3ba37dac10010a585c69a58f8762afd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
