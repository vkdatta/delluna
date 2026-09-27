export const name="snooze";
export const id="dl_b5257f00e695c3747713";
export const url=new URL("../icons/snooze.svg?v=d03720486f798fb11cbb7e925bceb37b3344bac739c56e4c00505b8126fd2966",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
