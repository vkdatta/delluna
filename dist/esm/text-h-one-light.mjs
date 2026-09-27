export const name="text-h-one-light";
export const id="dl_01371cee2a6abcb6bf05";
export const url=new URL("../icons/text-h-one-light.svg?v=dc8c4ba8850e69c7943efedaa9fcee9a80040ab843c7317ad9ebf80013b41955",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
