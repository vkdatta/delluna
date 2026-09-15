export const name="currency_bitcoin-fill";
export const id="dl_55d6bd0f24e644ee90e6";
export const url=new URL("../icons/C/currency_bitcoin-fill.svg?v=9a6a7a4be609d83e94bf84cdbf89aa4389969bf6b11418b8ecae93fe1b6fd55b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
