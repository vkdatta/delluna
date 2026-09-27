export const name="faucet-fill";
export const id="dl_ceb00d87f4ff634650dc";
export const url=new URL("../icons/faucet-fill.svg?v=7e05d4406dfc5ad449ffd678055614851ad6c2f74bb0c3c8ae4a0b8d048d006a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
