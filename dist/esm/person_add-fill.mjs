export const name="person_add-fill";
export const id="dl_b854fa04fbd6bb21e50f";
export const url=new URL("../icons/person_add-fill.svg?v=ab31a986ea5539b953a00cee6e556142d90f1b331539311c25383532159b648a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
