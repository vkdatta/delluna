export const name="watch";
export const id="dl_0c6e4d29e2e7438d96fc";
export const url=new URL("../icons/watch.svg?v=1631aa3edaa0415bdfc0b062cd0634c4cab82b7d8b86176a511dddb919a94542",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
