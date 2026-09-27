export const name="brush";
export const id="dl_da6bc4b8abdead0f8486";
export const url=new URL("../icons/brush.svg?v=c1ce234602fb719aa9312fe393d4b10f6f9089f7cf4eed96e3ecb8beab5e9f38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
