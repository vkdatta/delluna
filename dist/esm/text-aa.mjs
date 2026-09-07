export const name="text-aa";
export const id="dl_6e9542e8a7534344bbec";
export const url=new URL("../icons/T/text-aa.svg?v=e964560ce335191f6bfc660ee8be894d6459561516152f9fceaddb0b8d00b0d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
