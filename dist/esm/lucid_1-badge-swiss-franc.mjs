export const name="lucid_1-badge-swiss-franc";
export const id="dl_f089285fc87e422cb150";
export const url=new URL("../icons/lucid_1-badge-swiss-franc.svg?v=37634bac88fc730e1a9856bcfafe7b55e5cfc570c319ca101bf2ed55f4539045",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
