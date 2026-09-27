export const name="faucet-fill";
export const id="dl_862b264955e3b0076bf9";
export const url=new URL("../icons/faucet-fill.svg?v=905383488d420e18fc54a517879a2aad38abf476153a3a5c5c11f8ab86c2ad07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
