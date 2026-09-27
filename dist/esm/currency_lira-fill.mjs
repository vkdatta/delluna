export const name="currency_lira-fill";
export const id="dl_e267af82eab994e56bd8";
export const url=new URL("../icons/currency_lira-fill.svg?v=f6bd6e5aa904a63f9eab68ea020891845b4311420c411d6c62542600d669923c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
