export const name="universal_currency_alt";
export const id="dl_b50b90f87a484d2483b4";
export const url=new URL("../icons/universal_currency_alt.svg?v=0e3026ce8f8220e65c2340b92f7246c192fdede690f72947b1e4c4eb59f29563",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
