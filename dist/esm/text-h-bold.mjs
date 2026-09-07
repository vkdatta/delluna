export const name="text-h-bold";
export const id="dl_e933870a1d074b38ab0a";
export const url=new URL("../icons/T/text-h-bold.svg?v=fb5713e3c090e0fe650b5c86e4abf66f66b363a3e77bccfca544072dd6d7b0c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
