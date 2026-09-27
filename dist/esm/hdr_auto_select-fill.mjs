export const name="hdr_auto_select-fill";
export const id="dl_caccbca00cd46721e03c";
export const url=new URL("../icons/hdr_auto_select-fill.svg?v=c4c313d145447fd888373cad11cf7b030ec8e194eb5bf0ba28648b8445520979",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
