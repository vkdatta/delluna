export const name="lucid_2-laptop-minimal-check";
export const id="dl_fe89b05419d74f879bcc";
export const url=new URL("../icons/lucid_2-laptop-minimal-check.svg?v=3999b8dbc4fec2b48162eba3aeeb2a653af8bd91530f6576f3b0f05579e0096f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
