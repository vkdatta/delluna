export const name="stars";
export const id="dl_73b4d2960b254fd2b7c6";
export const url=new URL("../icons/stars.svg?v=a3b853648ba4b0846df912bcd463f1d9a8d9658a29d15d70578e1a4bfea662fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
