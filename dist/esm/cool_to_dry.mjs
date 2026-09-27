export const name="cool_to_dry";
export const id="dl_39c188971d540f97a9f9";
export const url=new URL("../icons/cool_to_dry.svg?v=bd19d6dd7a010e267ac28ae8cbb8d0bba9a5cdbf16b2ebc483968031e4ba5388",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
