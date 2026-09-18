export const name="pallet";
export const id="dl_1c1e72a411c842b7b22c";
export const url=new URL("../icons/P/pallet.svg?v=c9eaa2c84ad1f9e2622f1859814e4630b119118b802b5ff9a7ea199c2c15d613",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
