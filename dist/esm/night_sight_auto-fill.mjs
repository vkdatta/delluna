export const name="night_sight_auto-fill";
export const id="dl_36a8dba24bcce64b396f";
export const url=new URL("../icons/night_sight_auto-fill.svg?v=9ec197ece4d901f2b2e44401d9ee68c6ccc6ea46847368fa763bd86a7dd195ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
