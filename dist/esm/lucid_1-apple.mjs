export const name="lucid_1-apple";
export const id="dl_0ed7f23129d24824b009";
export const url=new URL("../icons/lucid_1-apple.svg?v=4ab9e815ae5c9a941957baa21077690622d9166750b3438f2b518e43452bf0f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
