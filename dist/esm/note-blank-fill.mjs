export const name="note-blank-fill";
export const id="dl_6c63b0e82e5b4cc6a6ee";
export const url=new URL("../icons/note-blank-fill.svg?v=d773e2e05390101e9f67df6773f9f60b7dd7ae3fcaeb58b928e7b8a72a3c2d40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
