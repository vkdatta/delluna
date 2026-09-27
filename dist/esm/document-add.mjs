export const name="document-add";
export const id="dl_9cae09f8771ddf438b35";
export const url=new URL("../icons/document-add.svg?v=f8d9be6d4995080350b79e5c155fd0e0df159730b3ce0e829fe6c01f049e3f81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
