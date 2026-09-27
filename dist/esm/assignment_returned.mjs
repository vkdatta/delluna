export const name="assignment_returned";
export const id="dl_c7e887e1c2e25ff3319e";
export const url=new URL("../icons/assignment_returned.svg?v=f1a2ba8c529007156a34a355ba74dfaf970cb571c90206937c818c627f06ad9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
