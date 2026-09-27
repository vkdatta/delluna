export const name="chart-line-thin";
export const id="dl_149f8ad867e14c08aab5";
export const url=new URL("../icons/chart-line-thin.svg?v=cc28dbd5c57b6b1281687b9c11bbfb36af0299ef8519dfda9084179a5f5ef874",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
