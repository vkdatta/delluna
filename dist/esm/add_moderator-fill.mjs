export const name="add_moderator-fill";
export const id="dl_ef254ff54e0b29fe255e";
export const url=new URL("../icons/add_moderator-fill.svg?v=e6c31e0d6d977f5ee6a0e9135b6d609b897412e95d60e7cbdeb97d6b1fac67d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
