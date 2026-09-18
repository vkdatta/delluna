export const name="redo-fill";
export const id="dl_1a7dc438e24142158324";
export const url=new URL("../icons/redo-fill.svg?v=2e50b7de3e428c7d93b7a1e5b0b9bd00bf3708baada8eb794f3fa6bea6e3aa8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
