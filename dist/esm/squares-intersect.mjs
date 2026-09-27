export const name="squares-intersect";
export const id="dl_d7014c6be2fd499a8457";
export const url=new URL("../icons/squares-intersect.svg?v=ad025a4f6cde397c90ed1b816cae22ab12fd42b754a41df801ae91fca5b06fbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
