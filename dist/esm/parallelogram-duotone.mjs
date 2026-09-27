export const name="parallelogram-duotone";
export const id="dl_7f7da5c661064860bf6b";
export const url=new URL("../icons/parallelogram-duotone.svg?v=3261e0293caca82a18a79888468f0e3cdc1e2a1026120cf80e3e24ab368dbda1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
