export const name="star-x";
export const id="dl_d7af8668f37f4092a18a";
export const url=new URL("../icons/star-x.svg?v=4cdeb03154819f268e84d88dcd8b584459dafe377d12088b4777bd60a60fb168",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
