export const name="add_card";
export const id="dl_4d45c11919115845a29f";
export const url=new URL("../icons/add_card.svg?v=7249429d0dd26ff1a5196d231531d99d54ec4f461e2179fc075e8dc32c35a6fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
