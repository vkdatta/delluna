export const name="diamond_shine";
export const id="dl_cd2c2c1e9b80d00bb2f3";
export const url=new URL("../icons/diamond_shine.svg?v=cfa98aae8fa253dc8a6a80834dc57bc9d289754f40e0e4d968b86566d65fbab0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
