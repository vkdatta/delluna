export const name="lucid_2-laptop-minimal-check";
export const id="dl_fe89b05419d74f879bcc";
export const url=new URL("../icons/lucid_2-laptop-minimal-check.svg?v=a1d20eb8a463a5391cd96f3af1af71c39ace989a9e6347f42a5b292766b44e2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
