export const name="forward_5-fill";
export const id="dl_98559107acf8d0c69bba";
export const url=new URL("../icons/forward_5-fill.svg?v=7d0cfa657c2932af79580e11e7c6b3f9d148104712d69a99970c02c8582252ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
