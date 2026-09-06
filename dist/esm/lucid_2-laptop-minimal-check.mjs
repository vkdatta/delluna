export const name="lucid_2-laptop-minimal-check";
export const id="dl_fe89b05419d74f879bcc";
export const url=new URL("../icons/lucid_2-laptop-minimal-check.svg?v=5faf4ccecbe9b9cc3b5aa1218951e8855632d94e78a9d0749b6e67a0a8ea2ad4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
