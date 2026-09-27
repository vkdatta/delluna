export const name="waves-fill";
export const id="dl_6179fbc9ccdca170b92a";
export const url=new URL("../icons/waves-fill.svg?v=7b526af4c81f07379139939b373476f6c28e564e0941ce693918c29c533fff3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
