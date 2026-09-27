export const name="list_alt_add";
export const id="dl_d3cd938a31125d07bee8";
export const url=new URL("../icons/list_alt_add.svg?v=7d89cd586be772a0c858ead86a1dba345dd77e1bbe36667a36b61ced07550de8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
