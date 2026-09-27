export const name="lucid_2-layout-grid";
export const id="dl_d7ae374064f14e4584dc";
export const url=new URL("../icons/lucid_2-layout-grid.svg?v=b085a6205e5ecf1adfcd6cec3173dec495f395be7b8c4dcc6d5a2be1545d6c5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
