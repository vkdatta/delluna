export const name="text-aa";
export const id="dl_a358c5c12131901e9422";
export const url=new URL("../icons/text-aa.svg?v=336ce4c6a17fd1dd5c87dabe95bc22e03e03a5c2299ec1153b7e1587b2345751",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
