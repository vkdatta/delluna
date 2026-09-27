export const name="clinical_notes";
export const id="dl_5d5f49c16f71294f05d6";
export const url=new URL("../icons/clinical_notes.svg?v=8f716c705fcb16cd6e2953ed0e9fbc58a1f6f386b52ec688e35d58e0ac2b1181",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
