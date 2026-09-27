export const name="barcode-fill";
export const id="dl_e6fbe92c6a1745ed92b7";
export const url=new URL("../icons/barcode-fill.svg?v=e97ed98244c480aba3eac585c92abfef2d511ee8bcc293a1ed0d756fa02e1722",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
