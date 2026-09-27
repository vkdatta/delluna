export const name="lucid_3-scan-box";
export const id="dl_8d651e66c35c4cd18929";
export const url=new URL("../icons/lucid_3-scan-box.svg?v=4b448a5909928251e8c347981be8d6115eb986c2583b8932249e9462cb14f0dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
