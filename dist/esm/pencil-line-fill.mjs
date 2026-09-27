export const name="pencil-line-fill";
export const id="dl_a439538d5fac4512bc9e";
export const url=new URL("../icons/pencil-line-fill.svg?v=dff199ecf5497774371280eb22040719b0c806c02e3ee795ab0d89080ad6fdf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
