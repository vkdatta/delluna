export const name="couch-duotone";
export const id="dl_6ae96a20c7354a5196da";
export const url=new URL("../icons/couch-duotone.svg?v=911798469e5fb6651eb3f9f04fadd79537196a7ba92d96f6afe718db0bfd6511",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
