export const name="lucid_1-cake-slice";
export const id="dl_2b7379ab5f57471d94c5";
export const url=new URL("../icons/lucid_1-cake-slice.svg?v=ca4993a224aaec56e5728f7f8e1239b469aa78a63e58ae70f07a518c23670fd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
