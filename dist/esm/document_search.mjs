export const name="document_search";
export const id="dl_adb8b2a92cd08e75a072";
export const url=new URL("../icons/document_search.svg?v=993a7e82e59f034c8ec54ecbb23273591b685b49ca9999529843dace0143fa2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
