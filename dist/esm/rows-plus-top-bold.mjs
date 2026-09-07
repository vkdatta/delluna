export const name="rows-plus-top-bold";
export const id="dl_bd19a45262464df0b41f";
export const url=new URL("../icons/rows-plus-top-bold.svg?v=d1beeb73c0a9604d40addb6fc9dce20a32eeee642935f4e5bdece7f1d8d7e485",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
