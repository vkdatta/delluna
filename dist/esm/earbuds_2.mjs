export const name="earbuds_2";
export const id="dl_1238fbfd5b37800dd815";
export const url=new URL("../icons/earbuds_2.svg?v=80521bd7754b700e19e4b0bb5c423062fcf55f83513fb217ffbff965e341ed88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
