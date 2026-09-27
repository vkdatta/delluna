export const name="universal_currency_alt";
export const id="dl_1c558512bf702ee1d89c";
export const url=new URL("../icons/universal_currency_alt.svg?v=07f9c86cfb4c243c8112e04245f9a3f874ad4c5239ffe3249d7ea626ce812290",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
