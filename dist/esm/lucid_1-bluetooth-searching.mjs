export const name="lucid_1-bluetooth-searching";
export const id="dl_5ab9741d25e241759ee4";
export const url=new URL("../icons/lucid_1-bluetooth-searching.svg?v=e01f7c87b8d3af06ff2a112ad7cedeb6a7d97b0156d645bf2b9a8a878845d623",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
