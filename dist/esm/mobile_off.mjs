export const name="mobile_off";
export const id="dl_31aae5987de14edab339";
export const url=new URL("../icons/mobile_off.svg?v=9070db5f9f20943c67c962962f78f689fd6e63bb2a766bde3276e5ec62cd20aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
