export const name="lucid_1-cat";
export const id="dl_257fba1e0a0d4411b5fa";
export const url=new URL("../icons/lucid_1-cat.svg?v=d695eec2fec4f918d68dd2f44574fe96a11cfeecee856b4db9c18598a9a748c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
