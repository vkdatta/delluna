export const name="lucid_2-list-end";
export const id="dl_b6da7a1451a247adaf19";
export const url=new URL("../icons/lucid_2-list-end.svg?v=f79e0fa4e7a9f703011676dbd1879898f46ce9997e52fb76b426507029026756",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
