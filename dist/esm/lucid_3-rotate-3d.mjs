export const name="lucid_3-rotate-3d";
export const id="dl_ce9112d62ff64fc1a47d";
export const url=new URL("../icons/lucid_3-rotate-3d.svg?v=8bd8c337110d219e11df08ee7bb67a79d6bd4adfaff0bb3a2415a151976d6d13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
