export const name="square-pilcrow";
export const id="dl_a2024cdc654544b3ab79";
export const url=new URL("../icons/square-pilcrow.svg?v=7f2157d181fc0757060365b25cd28d9c49bc125c76f09803d869c4e5277b1731",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
