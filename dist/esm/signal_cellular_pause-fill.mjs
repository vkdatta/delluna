export const name="signal_cellular_pause-fill";
export const id="dl_693826496fd56843c3da";
export const url=new URL("../icons/signal_cellular_pause-fill.svg?v=8b5366f41db4b6f25ff5fd9e5e8a04b3b8386be5e76b142957e99bf5ff25869d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
