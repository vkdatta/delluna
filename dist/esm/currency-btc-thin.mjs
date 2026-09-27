export const name="currency-btc-thin";
export const id="dl_a419b7aa809a49adbd4f";
export const url=new URL("../icons/currency-btc-thin.svg?v=c2804e9412477dfcde877b41bead475440cbd1688e31d3844d369b8b50ffe567",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
