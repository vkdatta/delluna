export const name="two_pager";
export const id="dl_2aff856ed57041dc4677";
export const url=new URL("../icons/two_pager.svg?v=a3e39b097b021eeeb1be894bd463843cb96a6b1173f53a9955910d468a5127ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
