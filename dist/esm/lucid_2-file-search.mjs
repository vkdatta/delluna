export const name="lucid_2-file-search";
export const id="dl_7ed11aa0308845d98612";
export const url=new URL("../icons/lucid_2-file-search.svg?v=7a2e6691c50002095d60e3c3da70d2278e895a14de91a52fc59c8e25773049c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
