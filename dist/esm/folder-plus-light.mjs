export const name="folder-plus-light";
export const id="dl_f5c75d45aff548f2a5b4";
export const url=new URL("../icons/folder-plus-light.svg?v=78ecab8437696ff78640cf26676090b1c5e9ec1a4e2a4527bed75e3f8bc27d62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
