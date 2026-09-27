export const name="receipt_long";
export const id="dl_454ced1b4d8a67b3564e";
export const url=new URL("../icons/receipt_long.svg?v=3401762acdeeaabf286d57089bdaa30537e8e0da54c6bf6b593e2c4ed4dae76e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
