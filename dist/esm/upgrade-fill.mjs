export const name="upgrade-fill";
export const id="dl_1f31c03ffb6e9d0a5d33";
export const url=new URL("../icons/upgrade-fill.svg?v=bf7359260d0fc0b1ff91ae764e2300c8c68c530d4077782e9db4e4daa927a0eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
