export const name="table_view";
export const id="dl_de0f1c91c4fe4b8bda98";
export const url=new URL("../icons/table_view.svg?v=78684f9df2566d376a7c626112e49ec809653504632f2d69397e0000f5ff197c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
