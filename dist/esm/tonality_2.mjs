export const name="tonality_2";
export const id="dl_10b775d1e756924be374";
export const url=new URL("../icons/tonality_2.svg?v=afffe988ae2138dd75af50d665be79d7620e9d018485f808823d986852c330bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
