export const name="contacts";
export const id="dl_19ce065a917a0258ae3a";
export const url=new URL("../icons/contacts.svg?v=c05320c9539d759d95e8961e1ae5b8cf869cc80268a0d95128c40b04a43a3224",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
