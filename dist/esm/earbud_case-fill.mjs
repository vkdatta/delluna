export const name="earbud_case-fill";
export const id="dl_bab2fd07724e51e5b504";
export const url=new URL("../icons/earbud_case-fill.svg?v=a283114537562ca0c12690a29b8f39e5709a783518983f10f6763ec5e9962132",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
