export const name="arrow-elbow-down-left-fill";
export const id="dl_0688c30a3db44b74a252";
export const url=new URL("../icons/arrow-elbow-down-left-fill.svg?v=4f2cbf438588eefc3fb0b46a084c46c3b8c8142402c7b1a6940302fcb78344cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
