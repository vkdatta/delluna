export const name="suitcase-rolling-light";
export const id="dl_91fad590ed1b24f056e1";
export const url=new URL("../icons/suitcase-rolling-light.svg?v=d9b1541be420bc6e05714e1e4572dfef9c18811abfb720c477e9be5411bbfd44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
