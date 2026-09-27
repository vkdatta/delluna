export const name="library_add";
export const id="dl_d595e640f2ce609525cb";
export const url=new URL("../icons/library_add.svg?v=9f882daa62aafe91290d0c94be6efc3418e58379ad6a14abbed2cbd4daa9510e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
