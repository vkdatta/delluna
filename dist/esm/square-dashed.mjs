export const name="square-dashed";
export const id="dl_24485bd7bee04f51a1f9";
export const url=new URL("../icons/square-dashed.svg?v=a6e475cfd40bbb8d5f54bf4473e18fccd1e1663643b099ea3af3172725792325",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
