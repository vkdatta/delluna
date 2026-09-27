export const name="lucid_3-reply";
export const id="dl_6cba9f3fcb06416b95e6";
export const url=new URL("../icons/lucid_3-reply.svg?v=ffa0b40d9c3af2c15a44b5758fb6cf504f8e0a587e3a62e87d89cf1549d98c70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
