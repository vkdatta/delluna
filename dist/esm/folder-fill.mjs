export const name="folder-fill";
export const id="dl_49020dd03fe14d9d9d3b";
export const url=new URL("../icons/folder-fill.svg?v=f62c7ae58a24d604bf3c0db35aaf710373bd4cb799d80fcc264360c13488d75c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
