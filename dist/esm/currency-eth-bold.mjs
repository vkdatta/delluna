export const name="currency-eth-bold";
export const id="dl_18d1d88412b84528bfdd";
export const url=new URL("../icons/currency-eth-bold.svg?v=7e927f828cd2b2640d088c6ed8e8f27180ea9154bfa2410961fba1e8ee69324b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
