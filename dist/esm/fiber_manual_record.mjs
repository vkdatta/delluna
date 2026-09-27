export const name="fiber_manual_record";
export const id="dl_106cdc6f3fceb24c9189";
export const url=new URL("../icons/fiber_manual_record.svg?v=26b76899da48ce5817c1530a991cc037e255c549ecceb740a6c3ffd6d8046cb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
