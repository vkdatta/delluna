export const name="lucid_1-ban";
export const id="dl_4f8074b7682b4c2e84c0";
export const url=new URL("../icons/lucid_1-ban.svg?v=e14f64f019df84a3d429485514f2aa5f643bde2fdf88b67c06085dda3e3a70a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
