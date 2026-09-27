export const name="currency_ruble-fill";
export const id="dl_7b6d2e50cdf93cbc2ad0";
export const url=new URL("../icons/currency_ruble-fill.svg?v=82b96fbb0ae3265296a5c9bad9f240f0ea522b4235fa718f9a7b89af8b06af1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
