export const name="wheat";
export const id="dl_7907ae95a8f24867a6d6";
export const url=new URL("../icons/wheat.svg?v=c9df6cc2c20cd04860169939100a1b53d258975ced12adf1e40fe8a5f0328586",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
