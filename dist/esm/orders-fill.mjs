export const name="orders-fill";
export const id="dl_676858a956a7cfbc6f53";
export const url=new URL("../icons/orders-fill.svg?v=3dd20bf755c21d10e9a997dd832b6b5f8fe30057528382e876cbffe6e33c7da2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
