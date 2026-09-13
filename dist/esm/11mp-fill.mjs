export const name="11mp-fill";
export const id="dl_157574e1fabd4452b890";
export const url=new URL("../icons/1/11mp-fill.svg?v=c2e63456f259a7307f738ed5dc7c080edd9c1ab3f96fe44f9a03c3368d7684dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
