export const name="currency-eth-bold";
export const id="dl_18d1d88412b84528bfdd";
export const url=new URL("../icons/currency-eth-bold.svg?v=11f202c5d6675588f3074b124757bdcc395911d10a3f4a594f4456e2abafe8b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
