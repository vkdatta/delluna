export const name="date_range";
export const id="dl_0d20e4928e770ca4c24a";
export const url=new URL("../icons/date_range.svg?v=6b91bc00cc28d499f5cb9c0854baf787a51858c1c70442bf6012916c04c51d4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
