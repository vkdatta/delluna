export const name="arrow-line-up-light";
export const id="dl_9244d31613dd42f19b00";
export const url=new URL("../icons/arrow-line-up-light.svg?v=2b7455581ba01ab403434998d45e75ddc4e0aa8f455e6d4cba43e4cae00ee2c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
