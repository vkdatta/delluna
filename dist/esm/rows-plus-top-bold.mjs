export const name="rows-plus-top-bold";
export const id="dl_bd19a45262464df0b41f";
export const url=new URL("../icons/rows-plus-top-bold.svg?v=6e934b31706731ec20be1386f6b189b5195e0802cc5b7969f5bc7f1e336f4157",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
