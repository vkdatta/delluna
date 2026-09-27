export const name="south_east-fill";
export const id="dl_75bf3a8d4d8a03c5f2ae";
export const url=new URL("../icons/south_east-fill.svg?v=a94c3bacc2f4e8217c2d794515935cf90813b7d49301916a60adf3e7d2f9a8ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
