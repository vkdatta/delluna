export const name="lucid_2-door-open";
export const id="dl_ff73ef87428545d18d0c";
export const url=new URL("../icons/lucid_2-door-open.svg?v=06428f2859c70ed7f2735c6f110b22d92d258d52ad4b2d33f82d646a2529b176",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
