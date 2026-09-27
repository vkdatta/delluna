export const name="duo-fill";
export const id="dl_a39e077b033002c3fba1";
export const url=new URL("../icons/duo-fill.svg?v=4b769c198796942745de016b2dbfa2a776eb6fd65bbe2a2e67d02cfefaf3852b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
