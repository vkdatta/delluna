export const name="lucid_1-clock-3";
export const id="dl_12e53706dba0446c9940";
export const url=new URL("../icons/lucid_1-clock-3.svg?v=50d87d9bbdcabc463bd94c6c3ee5b5b1f2ee57b6b04baa6a16122b8ecd6eaeb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
