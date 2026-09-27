export const name="currency-ngn-fill";
export const id="dl_3bbe62859d69453f8e22";
export const url=new URL("../icons/currency-ngn-fill.svg?v=0e9f91a20ca8b2e4eb838413552a34e7a01ba61066147cff8a83c164ae553c0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
