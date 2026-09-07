export const name="first-aid-light";
export const id="dl_de83b7ff3a0344acb0da";
export const url=new URL("../icons/first-aid-light.svg?v=c384bd7665e71c28aca0e9080648dc5a2ce8bb366c237a31b1ff6743593acfa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
