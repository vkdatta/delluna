export const name="member-of-thin";
export const id="dl_8a5a58ba61b944fdb8e4";
export const url=new URL("../icons/member-of-thin.svg?v=21953ca055fc2d04ef173c25397488462353e4f4308c86b9ccc40d3290967ec7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
