export const name="explore";
export const id="dl_e4d48a7ec026f3fcad19";
export const url=new URL("../icons/explore.svg?v=ca831e630d6887796c2f1afa9d5d2df7b8e71485a16baf2c959cb4bf87d6a001",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
