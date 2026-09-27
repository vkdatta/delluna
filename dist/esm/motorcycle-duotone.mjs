export const name="motorcycle-duotone";
export const id="dl_5ab73216ee22471dba5b";
export const url=new URL("../icons/motorcycle-duotone.svg?v=d5830bce712d1366b710dae504f4c22e1d2c008a0099ecbb59bd5da48cf75485",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
