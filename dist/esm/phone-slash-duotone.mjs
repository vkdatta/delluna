export const name="phone-slash-duotone";
export const id="dl_bd622b079db44ac99d70";
export const url=new URL("../icons/phone-slash-duotone.svg?v=17b47d27e6a23e6e9761c7d072a5aa3ea35d85b21b89f3a141623e50a685c881",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
