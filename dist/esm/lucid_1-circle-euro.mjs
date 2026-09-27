export const name="lucid_1-circle-euro";
export const id="dl_46d2ef1486a34daab166";
export const url=new URL("../icons/lucid_1-circle-euro.svg?v=d45a5a9389f24029597500b77e6780f4885c620d2a0776e2ff854c32895d5366",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
