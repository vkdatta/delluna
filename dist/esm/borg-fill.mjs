export const name="borg-fill";
export const id="dl_01c633612f29a092ce4e";
export const url=new URL("../icons/borg-fill.svg?v=84a9d72d37c4944695abb6011d3904e73f44234fc64452aa24dcb8295b298a6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
