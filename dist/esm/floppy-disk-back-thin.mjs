export const name="floppy-disk-back-thin";
export const id="dl_c5756a23f8b441fea47c";
export const url=new URL("../icons/floppy-disk-back-thin.svg?v=bd7b927734eb971b051dfc0103f4d2bbd5db9d9113a204053a461adfb85ac5c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
