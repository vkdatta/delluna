export const name="lucid_2-gallery-horizontal";
export const id="dl_4b92a09bf02a471980de";
export const url=new URL("../icons/lucid_2-gallery-horizontal.svg?v=b15db91594726687dfa03b3adc8b5235cccb524026070a4d287e3382d1f75937",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
