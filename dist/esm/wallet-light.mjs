export const name="wallet-light";
export const id="dl_ad05dff56690f2fec98c";
export const url=new URL("../icons/wallet-light.svg?v=adf7ee0492807f6ccb0256881d20d0852834d35a273251b068ce8114e9e1347c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
