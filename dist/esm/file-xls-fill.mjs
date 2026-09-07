export const name="file-xls-fill";
export const id="dl_93e0477d9fa94ab5a8cd";
export const url=new URL("../icons/file-xls-fill.svg?v=530633a87d323dc5623214d935d619acbf28d8e411ca36f412e4dd9b972025d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
