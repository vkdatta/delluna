export const name="toolbox-fill";
export const id="dl_04794817b2464a25bce5";
export const url=new URL("../icons/T/toolbox-fill.svg?v=c5e1eed87daf35e2b7b110ad79945d9eb1b543bd9a118e7aab1c151b2c71df42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
