export const name="person-simple-walk-fill";
export const id="dl_b1942b2be56d4376a6b3";
export const url=new URL("../icons/person-simple-walk-fill.svg?v=a04cc4bd5bfc0abf35df58d448142839d7a359dfe62353ded6cbd0237794fac8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
