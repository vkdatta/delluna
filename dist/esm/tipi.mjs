export const name="tipi";
export const id="dl_9a0f6d3885b9428fa750";
export const url=new URL("../icons/T/tipi.svg?v=2196a3205b1e9c7faaa2c7d841dba580043864af3464b2aea6933fb96e02f5db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
