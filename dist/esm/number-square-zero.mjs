export const name="number-square-zero";
export const id="dl_83593af9208d41a19728";
export const url=new URL("../icons/number-square-zero.svg?v=142a3adae2c5882d978de64b2d4877dbc3a64fab8da8203ddeb0e01b7e5a66df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
