export const name="file-doc-duotone";
export const id="dl_c8f90c3bb70047f1a8e2";
export const url=new URL("../icons/file-doc-duotone.svg?v=19a85507352b24161233782796d7c18a6622ebf609f38701e0bcdd7c76e9f906",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
