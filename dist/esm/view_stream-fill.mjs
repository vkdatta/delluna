export const name="view_stream-fill";
export const id="dl_ef6bc00a6d9c4873bd3b";
export const url=new URL("../icons/V/view_stream-fill.svg?v=91932d240f23b95a7ebe0a4181d864db5499655391b3ad84c06a17ed6225122d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
