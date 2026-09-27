export const name="cognition-fill";
export const id="dl_39611164b60d4ed3ae9f";
export const url=new URL("../icons/cognition-fill.svg?v=c1aa50482bcc232fb038d6cf2ae116b0e2f5729dcd12e108ec3b75d0474f4c8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
