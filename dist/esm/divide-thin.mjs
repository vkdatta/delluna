export const name="divide-thin";
export const id="dl_0db9aaf6688b4ce3b86b";
export const url=new URL("../icons/divide-thin.svg?v=3df87a8091e370e758aaa39c533777fa1fc49741bee18517c4f94f4dba497aca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
