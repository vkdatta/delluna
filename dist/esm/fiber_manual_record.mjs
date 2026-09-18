export const name="fiber_manual_record";
export const id="dl_fafc207abbfe46248de0";
export const url=new URL("../icons/fiber_manual_record.svg?v=7c7bdb96c6a018dd6a3ebe2da4ddedfda1f41b4386566185a4c64b75e85896b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
