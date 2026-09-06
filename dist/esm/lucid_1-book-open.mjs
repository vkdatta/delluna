export const name="lucid_1-book-open";
export const id="dl_59e2e1d0180247abba0d";
export const url=new URL("../icons/lucid_1-book-open.svg?v=2a296cf8389cce0a2c010ad446588f6f903590a5e8e9fe074ab639172d72f10c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
