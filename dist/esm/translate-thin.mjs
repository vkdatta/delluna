export const name="translate-thin";
export const id="dl_366bc54c03d6af0165e9";
export const url=new URL("../icons/translate-thin.svg?v=f9b4138a655fb4eca45cfce3010015908d07c09aa863dbd12cebcfe80c4ad289",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
