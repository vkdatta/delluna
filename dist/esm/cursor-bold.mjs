export const name="cursor-bold";
export const id="dl_cb733fb4d34344b38973";
export const url=new URL("../icons/cursor-bold.svg?v=cc39efe6482c577e6a3ccedf6efcad26769a9eb0bc2868fb18f9a22de43bf172",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
