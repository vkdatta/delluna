export const name="bus-fill";
export const id="dl_19f334077c4041a68f52";
export const url=new URL("../icons/bus-fill.svg?v=6e38164c9d5b9999d711f4200ab7f47e1aa302e17467282a05a817e20debf88f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
