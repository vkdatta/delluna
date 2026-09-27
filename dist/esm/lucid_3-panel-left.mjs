export const name="lucid_3-panel-left";
export const id="dl_f3d92b2e446a4ea48206";
export const url=new URL("../icons/lucid_3-panel-left.svg?v=93fbfa6b66e42dcc86a2ce9c3aae80c0f2bffd5c5876269553a8504eda1c04c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
