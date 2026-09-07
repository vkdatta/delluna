export const name="shopping-cart-simple";
export const id="dl_fc22e2dcb969472db8d3";
export const url=new URL("../icons/S/shopping-cart-simple.svg?v=20944ac538310e25fa1e419a4d7e10f36db803d70fd048ec2d9298a1332f5ee1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
