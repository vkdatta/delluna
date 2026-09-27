export const name="add_task-fill";
export const id="dl_6d107aa27d341bf8b89d";
export const url=new URL("../icons/add_task-fill.svg?v=3b1e27632ad984e26fce2ecb850746b429858641c1dd6c2f2dd86d33f3fc9393",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
