export const name="belt-duotone";
export const id="dl_8bb68f15e3b94bb4b42d";
export const url=new URL("../icons/belt-duotone.svg?v=de581e4367019c78ed4c628d7989cc6a9d07c1a036cce0f019cc2c916fc55450",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
