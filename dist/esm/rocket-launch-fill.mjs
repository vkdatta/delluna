export const name="rocket-launch-fill";
export const id="dl_917bbe697de3450f8d43";
export const url=new URL("../icons/rocket-launch-fill.svg?v=4d1f2556ca5f181576b54e53bfc64fe68dc5b8146ff89b84c4f464c6505e090c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
