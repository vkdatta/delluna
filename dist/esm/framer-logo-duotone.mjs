export const name="framer-logo-duotone";
export const id="dl_6f9b06ace4f442438573";
export const url=new URL("../icons/framer-logo-duotone.svg?v=df5f182a405db452ddb5882bb9ae0ee795a508592f62f2962ea59a7c42f6bb85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
