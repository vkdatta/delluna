export const name="stockpot";
export const id="dl_a8a7ecb3846c7c32095c";
export const url=new URL("../icons/stockpot.svg?v=bd55069f28b4e8e45f3860b8b0cdc27481dfa95ae39aca366a0b7d4628f2ea23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
