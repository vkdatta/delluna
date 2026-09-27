export const name="preliminary";
export const id="dl_117bc0b0cb79d57f52b2";
export const url=new URL("../icons/preliminary.svg?v=67458778e29540de3f903d53575c7620e8869c58f123ddc356235720b109945b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
