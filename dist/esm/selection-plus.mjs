export const name="selection-plus";
export const id="dl_41d086e994be75e8d3cc";
export const url=new URL("../icons/selection-plus.svg?v=16d32a1e0ebac398909f50701b4fa389ab599fbe95020c2084954b83651344f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
