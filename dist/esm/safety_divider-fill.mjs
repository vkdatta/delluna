export const name="safety_divider-fill";
export const id="dl_8a320b533be2ad0e0ff9";
export const url=new URL("../icons/safety_divider-fill.svg?v=533eea0239db50e842f3012299b891c35fbbf512ee9a4848d1d82f5523ab1290",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
