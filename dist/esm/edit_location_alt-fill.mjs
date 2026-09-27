export const name="edit_location_alt-fill";
export const id="dl_a507d3c73e6ca4bc7cb2";
export const url=new URL("../icons/edit_location_alt-fill.svg?v=5b93b7c092e5f7de87a5e06dd50bd51ce2bcd3909af23d9934e7f6bddf0205f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
