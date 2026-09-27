export const name="short_stay";
export const id="dl_73498a05ee2dc162e3e0";
export const url=new URL("../icons/short_stay.svg?v=353113db6731e0e753bae85f5c6596ed995782f550e41d5451e69f0e083eb8c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
