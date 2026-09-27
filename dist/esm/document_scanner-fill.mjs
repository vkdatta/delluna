export const name="document_scanner-fill";
export const id="dl_6ec9ce3a0a6d24bd5a1b";
export const url=new URL("../icons/document_scanner-fill.svg?v=a76d2a9ba37b001c0bdae9c6ab1ddcaa4eebd1d9377176df813b315088a15da2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
