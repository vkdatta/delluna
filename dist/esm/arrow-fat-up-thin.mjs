export const name="arrow-fat-up-thin";
export const id="dl_b0c99e6e5205434e9579";
export const url=new URL("../icons/arrow-fat-up-thin.svg?v=7d0d5103de2806c787d205c756595520757cc840765d844484b979d3480c9a2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
