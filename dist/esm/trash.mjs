export const name="trash";
export const id="dl_5827698eb5c1e796076f";
export const url=new URL("../icons/trash.svg?v=103b065cb0d9d15a1e5d266a2d375fe41720a7aade0c5a2212e194ce5d9b504c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
