export const name="stack-light";
export const id="dl_974558a0159e1467edc9";
export const url=new URL("../icons/stack-light.svg?v=110947ddaee5c0a9a4d29929e053f1066dd1ab1670ab3c9956feb0a8b2f35b24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
