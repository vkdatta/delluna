export const name="shopping-bag-open";
export const id="dl_e5fe69f7f9536610430f";
export const url=new URL("../icons/shopping-bag-open.svg?v=74db271466556d14947d4e6a7c9dce42a526b3e8b59da4bd89fd365d3af7c95c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
