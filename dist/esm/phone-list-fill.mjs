export const name="phone-list-fill";
export const id="dl_30e42ad096634967b1f5";
export const url=new URL("../icons/phone-list-fill.svg?v=fa8aa20a47e38bf96dd32b76116fdc60535472e3405751bdd6977f175819c585",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
