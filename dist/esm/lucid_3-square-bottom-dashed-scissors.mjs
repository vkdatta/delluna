export const name="lucid_3-square-bottom-dashed-scissors";
export const id="dl_4d58fcc0faea4eddb4f7";
export const url=new URL("../icons/lucid_3-square-bottom-dashed-scissors.svg?v=4623ca7936ec452086254e538265e2ca505244f1cb9dabdbc4d65f1d5d9d6ad5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
