export const name="shipping-container-bold";
export const id="dl_e540be4cfb2e1964b192";
export const url=new URL("../icons/shipping-container-bold.svg?v=ce980f304217df77b664a1c53e15dae8fb38cefd2fc2c870b706124ccef9a805",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
