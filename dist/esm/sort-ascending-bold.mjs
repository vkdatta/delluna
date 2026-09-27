export const name="sort-ascending-bold";
export const id="dl_2a820a78e2064bcf458d";
export const url=new URL("../icons/sort-ascending-bold.svg?v=18ef222e0a96da5cb4020cad00d57d93a9506dae031c5e45e3a471e5181d5691",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
