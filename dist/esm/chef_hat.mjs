export const name="chef_hat";
export const id="dl_46f14635a2cc1cce9675";
export const url=new URL("../icons/chef_hat.svg?v=33a797c552cc3c48b055d6d9e5d4111226f23ecc696406de12b4faa15660fa94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
