export const name="sheets_rtl";
export const id="dl_f8385c1a2a5b537a3a7f";
export const url=new URL("../icons/sheets_rtl.svg?v=4fead75ed8a83db50b0cf4ad648104544ecf41929e91ddcb43b4b2e904c17786",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
