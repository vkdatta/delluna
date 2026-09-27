export const name="check-fat-bold";
export const id="dl_8eca35581a1d4c44a277";
export const url=new URL("../icons/check-fat-bold.svg?v=deec7472092f6e27c39ef1bd7c51063c6f467eb993ca4d8792748d9760729f19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
