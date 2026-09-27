export const name="trend-down-light";
export const id="dl_4e0b5b150f9dfdf8cdfd";
export const url=new URL("../icons/trend-down-light.svg?v=ac745456f5f97d87c6fc496b35f78fc935ae927e975020d2e06dff171a3a4fd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
