export const name="currency-eth-bold";
export const id="dl_18d1d88412b84528bfdd";
export const url=new URL("../icons/currency-eth-bold.svg?v=702f2b2e719b2da9be9621398ff2f038fe4bea3ba5939b4b59b421d79f1d24f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
