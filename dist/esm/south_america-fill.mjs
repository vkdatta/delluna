export const name="south_america-fill";
export const id="dl_364a7937d8145b606529";
export const url=new URL("../icons/south_america-fill.svg?v=a1ad218ef05386ee713832793d41d4ae93384d59b8d00c9e529afc1d1a0dfc74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
