export const name="sort-ascending-duotone";
export const id="dl_fa6eea2ccb027194f278";
export const url=new URL("../icons/sort-ascending-duotone.svg?v=eb3963b4783b92acb0ae2de5237d263969accf18d41c6edd9ebd0aabe5cd2296",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
