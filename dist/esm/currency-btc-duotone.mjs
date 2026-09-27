export const name="currency-btc-duotone";
export const id="dl_f2a9e7e673a54af5bdc1";
export const url=new URL("../icons/currency-btc-duotone.svg?v=8589d37623d0494ad6cc4e646f5868dcd54220752b56c667b800acf7edc2660a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
