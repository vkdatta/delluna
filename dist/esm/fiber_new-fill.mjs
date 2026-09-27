export const name="fiber_new-fill";
export const id="dl_c2652a65746b6c64485f";
export const url=new URL("../icons/fiber_new-fill.svg?v=7c1c9d97852d533714918e30a17571a7b1617bde15d7dda0bbae7ef9e6d5ad92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
