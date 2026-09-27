export const name="stack-plus";
export const id="dl_9b9ce95e617b7f61ff03";
export const url=new URL("../icons/stack-plus.svg?v=db2e72989f3258942f36bea49f3cbaa528dfd1d345c995629654278e57629c83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
