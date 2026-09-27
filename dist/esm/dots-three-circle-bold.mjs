export const name="dots-three-circle-bold";
export const id="dl_0bb1d3a806a042d7a8d7";
export const url=new URL("../icons/dots-three-circle-bold.svg?v=66c2e9e278925fee8fd76dbacaaef8809c0ce8184b6ed5cd77f46dba5a6b95f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
