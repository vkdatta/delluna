export const name="university";
export const id="dl_d27b5dba7ecb4ede9ebe";
export const url=new URL("../icons/university.svg?v=6ce3af2a8ebd546d5cab2c917c89f96b10dbe6eb7c87849605ac35bd3dc998db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
