export const name="lockers-light";
export const id="dl_6e45d3c72d70494e8b49";
export const url=new URL("../icons/lockers-light.svg?v=b5f59e6aef14c1063736f5e43aaec4b813dc1bdda24b0dfdb966ebe5ecac7f77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
