export const name="tooth";
export const id="dl_7f86352b4617091b6713";
export const url=new URL("../icons/tooth.svg?v=590c799aff37dfb2c1860d364d006b8dcd6d19a3908252aa0b8ce52ec73ef5ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
