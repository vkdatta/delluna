export const name="currency-rub-bold";
export const id="dl_e2b97b7ace404467ae66";
export const url=new URL("../icons/currency-rub-bold.svg?v=b20f85b47819869b079932b2ffed58d7acfa255d611511956a69cf598fd87196",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
