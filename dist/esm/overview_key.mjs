export const name="overview_key";
export const id="dl_c4f08807f463348dc2b3";
export const url=new URL("../icons/overview_key.svg?v=c1c0ec4914441c09b1375176f941c1761ce802b05a32b70a418d53e4e50fa4c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
