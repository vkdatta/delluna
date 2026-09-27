export const name="source_notes-fill";
export const id="dl_fa51f6c5bb0e9a3f9c4b";
export const url=new URL("../icons/source_notes-fill.svg?v=b706d4fc415dab38e80364c59ad4e667b387948251f4b9bb0fad360c3fc14baa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
