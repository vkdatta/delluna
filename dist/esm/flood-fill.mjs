export const name="flood-fill";
export const id="dl_ee8543f2cc6d26cc3f7d";
export const url=new URL("../icons/flood-fill.svg?v=3e1085c5724f80febc1a6ff923812435e1b9b3e238f5f7c75a9a7afb49fd259c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
