export const name="sort-descending-duotone";
export const id="dl_caa10cbd5d2289f04650";
export const url=new URL("../icons/sort-descending-duotone.svg?v=7eda6e49cb24fbcf703cf29abccb435813d9b7ac284438a63559d65c741b0d64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
