export const name="circles-fill";
export const id="dl_0a725cd66ecea3170255";
export const url=new URL("../icons/circles-fill.svg?v=11e4b2513d11b9e93745834dd802d7b1a0bac62c420df81006074c7d4416f8bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
