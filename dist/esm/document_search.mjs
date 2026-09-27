export const name="document_search";
export const id="dl_3cee3c4be07425cae095";
export const url=new URL("../icons/document_search.svg?v=a47e07fc7a4b10f2fddf9a0c844471820ab408388569e9fb4119edf2b3a97572",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
