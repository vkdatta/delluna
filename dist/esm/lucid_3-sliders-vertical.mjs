export const name="lucid_3-sliders-vertical";
export const id="dl_da942087129b419a81a4";
export const url=new URL("../icons/lucid_3-sliders-vertical.svg?v=bbf6adc6fc58be4366151d5ad3c025a070cbb0192314f576591f9cbcd5841efc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
