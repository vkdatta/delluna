export const name="peace-light";
export const id="dl_d60821125f604ab282ee";
export const url=new URL("../icons/peace-light.svg?v=8217c58001a750d1a6378d561e2a41f59e8f14bff1c570c44f95375fce7f535a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
