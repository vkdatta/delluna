export const name="selection-background-duotone";
export const id="dl_79236b013c58204a101a";
export const url=new URL("../icons/selection-background-duotone.svg?v=ac92f0da5dd1707fb1ef72e2f9e0e5b73af0c730e7269b28c0cf81a3a0d64b05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
