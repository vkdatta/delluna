export const name="trend-down-fill";
export const id="dl_3e56d4b0049f466b805b";
export const url=new URL("../icons/T/trend-down-fill.svg?v=14600c8f5cd9b22c7186dd5b97de5630d364f3736a11e6947ccee8ebd0a59df3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
