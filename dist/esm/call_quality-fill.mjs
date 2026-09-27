export const name="call_quality-fill";
export const id="dl_a924d4265e395d34dd6a";
export const url=new URL("../icons/call_quality-fill.svg?v=415af8904b65ab3033bd1bb0682ba22ac8e60b80276673efba7435e238f2ec98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
