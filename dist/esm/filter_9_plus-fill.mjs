export const name="filter_9_plus-fill";
export const id="dl_6e0ce36c449bb26f824f";
export const url=new URL("../icons/filter_9_plus-fill.svg?v=ace5c02881a7c62b85ba6bc52104507d8783ce19f6bf558140b859d05bf36031",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
