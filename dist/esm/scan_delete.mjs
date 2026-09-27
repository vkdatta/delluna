export const name="scan_delete";
export const id="dl_f173fffc006aedd9e167";
export const url=new URL("../icons/scan_delete.svg?v=c4fc6937d908964a413bd18dd569b0b2f46f706050ab67a4288276346575c632",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
