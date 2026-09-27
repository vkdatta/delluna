export const name="lucid_2-layout-template";
export const id="dl_a402c8cd3fc84707a916";
export const url=new URL("../icons/lucid_2-layout-template.svg?v=f9ce4c834bf278dcc834f26fc789da3c2252f2e8789f98ac47c22d29bfd05370",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
