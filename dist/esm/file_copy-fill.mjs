export const name="file_copy-fill";
export const id="dl_1f1248cd4bd6abf34d98";
export const url=new URL("../icons/file_copy-fill.svg?v=32005424a4dc0198476e05e5b2a75729557fadfa401ec7abe23d53e34015c5ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
