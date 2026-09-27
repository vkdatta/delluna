export const name="kanji_alcohol-fill";
export const id="dl_bebcc438b43ddc5e95a5";
export const url=new URL("../icons/kanji_alcohol-fill.svg?v=9b34a0022a9a8e28cc8895dba6daf04101cf1065eca90e0bae26796d109a2415",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
