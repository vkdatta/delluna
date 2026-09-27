export const name="list-bold";
export const id="dl_d2697430c8bc47cb9a2f";
export const url=new URL("../icons/list-bold.svg?v=8b976dd858da42ac7167604c0ca3c53d9650bc69e20247410d7d5b147f2e7287",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
