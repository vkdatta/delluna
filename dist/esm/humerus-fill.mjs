export const name="humerus-fill";
export const id="dl_6703369573670a4e8ddc";
export const url=new URL("../icons/humerus-fill.svg?v=625cc4570dee1d9f5076aa2accb630a7d43cc639362794c30c4455e456cbc6cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
