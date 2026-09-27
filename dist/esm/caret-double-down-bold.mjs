export const name="caret-double-down-bold";
export const id="dl_406c27b0313148d5a3d5";
export const url=new URL("../icons/caret-double-down-bold.svg?v=9d47821a5b5ccc9c851e62da973d6317ad033c08128fc16d0388aaad5a874c1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
