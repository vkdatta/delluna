export const name="faucet-fill";
export const id="dl_874c61eacadf50bd2622";
export const url=new URL("../icons/faucet-fill.svg?v=aea0f816c3c5cc5d128bca21427dcf6b86523c214e0aabeac73bc3d788a6c67a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
