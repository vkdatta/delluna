export const name="browsers-thin";
export const id="dl_75e45b2706fd4720900b";
export const url=new URL("../icons/browsers-thin.svg?v=2cad7223e3c7a0ab496e9f9d87a56c88a08bb9b37e1686a456dfa7a75de77795",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
