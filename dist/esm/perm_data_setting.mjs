export const name="perm_data_setting";
export const id="dl_7ea58ce7a5f5e1f29f1d";
export const url=new URL("../icons/perm_data_setting.svg?v=a33fe162ed7cf5295b9f7b18eb62717527a697267454d3706f7fcb8a14f0f018",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
