export const name="pen-nib-straight-light";
export const id="dl_e8eea3ad23c74f96aa36";
export const url=new URL("../icons/pen-nib-straight-light.svg?v=9fb8a90c69cad7ba93122904745753301fffc5447ae447e37edeed878bdda1a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
