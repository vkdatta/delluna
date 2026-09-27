export const name="caret-double-left-duotone";
export const id="dl_24058f0d4a5947158843";
export const url=new URL("../icons/caret-double-left-duotone.svg?v=19fda50487d6284f46750c7133b02fbdeeac74b846d8b10422930e9ee96dc362",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
