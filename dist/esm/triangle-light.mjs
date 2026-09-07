export const name="triangle-light";
export const id="dl_b739e994566540dbb815";
export const url=new URL("../icons/T/triangle-light.svg?v=3ba2cad38256c0737b327ca374db08a934d845b36b193c5c580f1ee2dba623aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
