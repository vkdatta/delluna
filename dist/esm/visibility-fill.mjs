export const name="visibility-fill";
export const id="dl_78b3ea5b2948d0462017";
export const url=new URL("../icons/visibility-fill.svg?v=38cec7c6b29d9de0e338bae87f53a26250e4cf9bf315d6abf0baad347a5139a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
