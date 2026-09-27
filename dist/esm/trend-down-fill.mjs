export const name="trend-down-fill";
export const id="dl_d69045829c828c2ee4e4";
export const url=new URL("../icons/trend-down-fill.svg?v=14600c8f5cd9b22c7186dd5b97de5630d364f3736a11e6947ccee8ebd0a59df3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
