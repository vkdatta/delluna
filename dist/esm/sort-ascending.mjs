export const name="sort-ascending";
export const id="dl_bc4f277d397d401fa623";
export const url=new URL("../icons/S/sort-ascending.svg?v=a9791208ad848f553cc7eb38a6adaf3dedcbb5922841dd05c683d123fd6272f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
