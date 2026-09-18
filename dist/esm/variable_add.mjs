export const name="variable_add";
export const id="dl_9fa5980a32c84be2b1cb";
export const url=new URL("../icons/V/variable_add.svg?v=1cf7f1136e0e10de094e0ebffee2117ce1daa36f70aa9d7350e3f98daf4db1fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
