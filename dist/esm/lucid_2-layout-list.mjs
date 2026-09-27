export const name="lucid_2-layout-list";
export const id="dl_54af2e24e50344309029";
export const url=new URL("../icons/lucid_2-layout-list.svg?v=148bfd4e628c9ba15184abdb5fa16c01d06f16932f245ca143027efb7f416f30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
