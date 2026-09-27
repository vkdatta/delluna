export const name="currency-btc-duotone";
export const id="dl_f2a9e7e673a54af5bdc1";
export const url=new URL("../icons/currency-btc-duotone.svg?v=6c7b587f1244575971b9c4f0b892501df6ce3ff0c2da4567543486691ca6a4f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
