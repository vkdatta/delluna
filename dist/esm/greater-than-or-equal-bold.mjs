export const name="greater-than-or-equal-bold";
export const id="dl_562230bebc724aa6bee8";
export const url=new URL("../icons/greater-than-or-equal-bold.svg?v=eec1e344964a11363b54ceaa72c855ec582020e13b2e9b773923763e78fd173e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
