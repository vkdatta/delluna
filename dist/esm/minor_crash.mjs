export const name="minor_crash";
export const id="dl_190cf4eefe758883cff2";
export const url=new URL("../icons/minor_crash.svg?v=3cb3268b9e328ab9c85d7d47c88af8bcb1868912aa5d5f1c1827a99c44be265e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
