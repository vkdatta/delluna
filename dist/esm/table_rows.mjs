export const name="table_rows";
export const id="dl_c91c12c4f10275865d36";
export const url=new URL("../icons/table_rows.svg?v=471d93fcf5fa88968858f9cc70aeae6c25bd31af4708681baacd09e4d0baf015",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
