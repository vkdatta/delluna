export const name="toilet-paper";
export const id="dl_0d4fda44317f4ef39d4b";
export const url=new URL("../icons/T/toilet-paper.svg?v=420720b4c6d8a1ce468b0ad92f310706bb78968677de635b0e3bea339c2516b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
