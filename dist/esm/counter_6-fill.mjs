export const name="counter_6-fill";
export const id="dl_eaaecd1b7a684f33929f";
export const url=new URL("../icons/C/counter_6-fill.svg?v=e5f28d486059d06f710be81dc677b7d84d0581c76010c37118e3a25cc4ac20b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
