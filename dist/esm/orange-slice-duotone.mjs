export const name="orange-slice-duotone";
export const id="dl_0dcd78e1399943cbb465";
export const url=new URL("../icons/orange-slice-duotone.svg?v=988cc2cddb54db1868d39d64379b0bda6fbdeb58bf95fd00e16ba4f886668fbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
