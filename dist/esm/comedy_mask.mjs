export const name="comedy_mask";
export const id="dl_1210513cf28d086785f8";
export const url=new URL("../icons/comedy_mask.svg?v=e09c6143f3edd7ffddd41388923de197da41db5f99b78c3e38862264537bd075",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
