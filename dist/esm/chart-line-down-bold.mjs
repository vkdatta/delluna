export const name="chart-line-down-bold";
export const id="dl_7f7dc915dc8348398e13";
export const url=new URL("../icons/chart-line-down-bold.svg?v=9b35f3b8f3c3ab5b511aab0d1c32755bebe19ef804f6088efce72c134787f324",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
