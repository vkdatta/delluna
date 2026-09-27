export const name="crane-light";
export const id="dl_1cd430dbe83442c68845";
export const url=new URL("../icons/crane-light.svg?v=e2f93ace0353178ddfe401d1cb7ef574e59dad4b73d3b53b39b59eae6be6f1ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
