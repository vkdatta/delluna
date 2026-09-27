export const name="lucid_2-germ";
export const id="dl_7e6d2e997e1848abb3b0";
export const url=new URL("../icons/lucid_2-germ.svg?v=ef01fe616d2040caeb0769665139fb5bb45e939da8d592585ce230fad48e4765",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
