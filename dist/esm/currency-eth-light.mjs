export const name="currency-eth-light";
export const id="dl_723a34a47bb84287ba6c";
export const url=new URL("../icons/currency-eth-light.svg?v=d07e7aa9d8d2e27d5a458406804836462a0e940338dd7499e8213fbcd65c414b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
