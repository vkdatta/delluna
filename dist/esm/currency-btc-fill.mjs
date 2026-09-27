export const name="currency-btc-fill";
export const id="dl_b2d6fb887f60488e940b";
export const url=new URL("../icons/currency-btc-fill.svg?v=f3fcdc1cba6a9bd7fce4c9b9141699438098c88ac0af77b71348db1ffb8c16b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
