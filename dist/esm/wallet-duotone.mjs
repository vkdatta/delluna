export const name="wallet-duotone";
export const id="dl_2468aba1d62042ff8d7c";
export const url=new URL("../icons/W/wallet-duotone.svg?v=b3a8bd8ee9727f61f660cbf35032772c7e8b20e7be0666d436908a1a949ecbd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
